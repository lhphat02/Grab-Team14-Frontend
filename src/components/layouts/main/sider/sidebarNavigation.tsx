// @ts-nocheck
// @ts-ignore
import React from 'react';
import { DashboardOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { ReactComponent as NftIcon } from '@app/assets/icons/nft-icon.svg';

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.job',
    key: 'job',
    url: '/jobs',
    icon: <UnorderedListOutlined />,
  },
  {
    title: 'common.history',
    key: 'history',
    url: '/history',
    icon: <UnorderedListOutlined />,
  }
];
