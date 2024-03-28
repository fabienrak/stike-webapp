// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Story, Paperclip2, Book, Personalcard } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  gestion: Story,
  article: Book,
  categorie: Paperclip2,
  auteur: Personalcard
};

const gestion: NavItemType = {
    id: 'group-widget',
    title: <FormattedMessage id="Gestion" />,
    icon: icons.gestion,
    type: 'group',
    children: [
      {
        id: 'article',
        title: <FormattedMessage id="article" />,
        type: 'item',
        url: '/gestion/article',
        icon: icons.article
      },
      {
        id: 'categorie',
        title: <FormattedMessage id="categorie" />,
        type: 'item',
        url: '/gestion/categorie',
        icon: icons.categorie
      },
      {
        id: 'auteur',
        title: <FormattedMessage id="auteur" />,
        type: 'item',
        url: '/widget/chart',
        icon: icons.auteur
      }
    ]
};
  
export default gestion;