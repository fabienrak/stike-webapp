// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { Story, Paperclip2, Book, Personalcard, Bill,Calendar1, Kanban } from 'iconsax-react';

// TYPE
import { NavItemType } from 'types/menu';

// ICONS
const icons = {
  gestion: Story,
  article: Book,
  categorie: Paperclip2,
  auteur: Personalcard,
  facturation: Bill,
  planning: Calendar1,
  projets: Kanban
};

const gestion: NavItemType = {
    id: 'group-widget',
    title: <FormattedMessage id="Gestion" />,
    icon: icons.gestion,
    type: 'group',
    children: [
      /* {
        id: 'article',
        title: <FormattedMessage id="Article" />,
        type: 'item',
        url: '/gestion/article',
        icon: icons.article
      },
      {
        id: 'categorie',
        title: <FormattedMessage id="Categorie" />,
        type: 'item',
        url: '/gestion/categorie',
        icon: icons.categorie
      },
      {
        id: 'auteur',
        title: <FormattedMessage id="Auteur" />,
        type: 'item',
        url: '/widget/chart',
        icon: icons.auteur
      }, */
      {
        id: 'facturation',
        title: <FormattedMessage id="Facturation" />,
        type: 'collapse',
        icon: icons.facturation,
        children: [
          {
            id: 'create-facturation',
            title: <FormattedMessage id="Nouveau facture" />,
            type: 'item',
            url: '/gestion/facturation',
            //icon: icons.facturation
          },
          /*{
            id: 'list-facturation',
            title: <FormattedMessage id="Liste facture" />,
            type: 'item',
            url: '#',
            //icon: icons.facturation
            }*/
        ]
      },
      {
        id: 'planning',
        title: <FormattedMessage id="Planning" />,
        type: 'item',
        url: '/gestion/planning',
        icon: icons.planning
      },
      {
        id: 'projets',
        title: <FormattedMessage id="Projets" />,
        type: 'collapse',
        icon: icons.projets,
        children: [
          {
            id: 'depot-projet',
            title: <FormattedMessage id="Deposer projet" />,
            type: 'item',
            url: '/projets/depots',
            //icon: icons.facturation
          },
          /*{
            id: 'list-facturation',
            title: <FormattedMessage id="Liste facture" />,
            type: 'item',
            url: '#',
            //icon: icons.facturation
            }*/
        ]
      },
    ]
};
  
export default gestion;
