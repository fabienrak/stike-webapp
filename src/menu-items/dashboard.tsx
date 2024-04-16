// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HomeTrendUp, Box1 } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

const icons = {
  dashboard: HomeTrendUp,
  components: Box1
};

const dashboard: NavItemType = {
  id: 'group-widget',
  title: <FormattedMessage id="Tableau de bord" />,
  icon: icons.dashboard,
  type: 'group',
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="Tableau de bord" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.dashboard
    }
  ]
};

export default dashboard;

// import { useGetMenu } from 'api/menu';

/* const icons = {
  dashboard: HomeTrendUp,
  components: Box1,
  loading: Home3
};

const loadingMenu: NavItemType = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'default1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //

export const MenuFromAPI = () => {
  const { menu, menuLoading } = useGetMenu();

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children: NavItemType[]) => {
    return children?.map((subList: NavItemType) => {
      return fillItem(subList);
    });
  };

  const itemList = (subList: NavItemType) => {
    let list = fillItem(subList);

    // if collapsible item, we need to feel its children as well
    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children!);
    }
    return list;
  };

  const childrenList: NavItemType[] | undefined = menu?.children?.map((subList: NavItemType) => {
    return itemList(subList);
  });

  let menuList = fillItem(menu, childrenList);
  return menuList;
};

function fillItem(item: NavItemType, children?: NavItemType[] | undefined) {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    // @ts-ignore
    icon: icons[item?.icon],
    ...(children && { children })
  };
} */