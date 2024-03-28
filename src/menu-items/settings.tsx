// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Story, Paperclip2, Book, Personalcard, PenTool, UserSquare } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  parametre: PenTool,
  users: UserSquare
};

const settings: NavItemType = {
    id: 'group-widget',
    title: <FormattedMessage id="Comptes" />,
    icon: icons.parametre,
    type: 'group',
    children: [
      {
        id: 'utilisateur',
        title: <FormattedMessage id="utilisateur" />,
        type: 'item',
        url: '/users/account/basic',
        icon: icons.users
      }
    ]
};
  
export default settings;