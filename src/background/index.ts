import { websiteLinks, personalLinks, defaultGroups } from '../links'

type WebsiteLinkKes = keyof typeof websiteLinks;
type PersonalLinkKeys = keyof typeof personalLinks;

type Link = {
  url: string,
  title: string,
  group: string,
  key: string
}
type OptionStorage = {
  links: Record<string, Link>,
  groups: string[]
}

const addUserContextMenu = (groups: string[], links: Record<string, Link>) => {
  groups.forEach((group) => {
    const groupLinks = Object.values(links).filter((link) => link.group === group)

    chrome.contextMenus.create({
      id: group,
      title: group,
      contexts: ['selection'],
    })

    groupLinks.forEach((link) => {
      chrome.contextMenus.create({
        id: link.key,
        title: link.title,
        contexts: ['selection'],
        parentId: group,
      })
    })
  });
}

const addFixedContextMenu = () => {
  chrome.contextMenus.create({
    id: 'separator2',
    type: 'separator',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'options',
    title: 'Settings',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'about',
    title: 'About',
    contexts: ['selection'],
  });

  Object.entries(personalLinks).forEach(([key, item]) => {
    chrome.contextMenus.create({
      id: key,
      title: item.title,
      contexts: ['selection'],
      parentId: 'about',
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  // Initialized Data
  // default group
  chrome.storage.sync.set({
    groups: defaultGroups
  });

  chrome.storage.sync.set({
    links: websiteLinks
  });

  addUserContextMenu(defaultGroups, websiteLinks);
  addFixedContextMenu();
});

chrome.storage.onChanged.addListener(async () => {
  const { groups, links }: OptionStorage = ((await chrome.storage.sync.get([
    'groups',
    'links',
  ])) as OptionStorage) ?? {
    groups: ['Default'],
    links: {},
  };

  addUserContextMenu(groups, links);

  addFixedContextMenu();
});

chrome.contextMenus.onClicked.addListener(function (info) {
  const { selectionText, menuItemId } = info;
  if (menuItemId === 'options') {
    chrome.runtime.openOptionsPage();
    return;
  }

  if (!selectionText) {
    return
  }
  if (websiteLinks[menuItemId as WebsiteLinkKes]) {
    const target = websiteLinks[menuItemId as WebsiteLinkKes];
    const uri = target.url.replace('$$$', selectionText);
    chrome.tabs.create({ url: uri, active: false });
  } else if (personalLinks[menuItemId as PersonalLinkKeys]) {
    const target = personalLinks[menuItemId as PersonalLinkKeys];
    chrome.tabs.create({ url: target.url, active: false });
  }
  
})
