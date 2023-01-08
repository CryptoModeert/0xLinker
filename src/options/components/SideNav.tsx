import React, { ReactNode } from 'react';
import { Link as ReactLink } from 'react-router-dom'

import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu } from 'react-icons/fi'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Links', icon: FiHome, link: 'links' },
  { name: 'Groups', icon: FiTrendingUp, link: '/groups' },
  { name: 'Configuration', icon: FiCompass, link: '/configuration' },
  { name: 'About', icon: FiStar, link: '/about' },
]

export default function SimpleSidebar() {
  return (
    <Box minH="" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => {}} />
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      h="full"
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} fontSize="md" href={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactNode,
  href: string;
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  return (
    <Link
      as={ReactLink}
      to={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

