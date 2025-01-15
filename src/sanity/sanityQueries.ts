export const getUsers = () => `*[_type == "user"]{
      name,
      subject,
      "image": profileImage.asset->url,
      "slug": slug.current,
  }`;

export const menus = () => `*[_type == "menu"][0] {
  menuItems[]{
    sectionTitle,
    links[]{
      title,
      url,
      page->{
        title,
        "url": slug.current
      }
    }
  },
  "menufooter": footerSections[]{
    sectionTitle,
    links[]{
      title,
      url,
      page->{
        title,
        "slug": slug.current
      }
    }
  },
  "logo": logo.asset->url
}
`;

export const getPageDataQuery = (slug: string) => `
 
  *[_type == "page" && slug.current == "${slug}"]{
  title,
  visible,
  "slug": slug.current,
  pageBuilder[]{
    _type == "hero" => {
      _type,
      "image": image.asset->url,
      title,
      subtitle,
      hasButton,
      link,
      linkText
    },
    _type == "twoColumnsText" => {
      _type,
      title,
      column1,
      column2,
      hasButton,
      buttonText,
      link
    },
    _type == "imageText" => {
      _type,
      title,
      content,
      hasOneButton,
      linkButtonOne,
      textButtonOne,
      hasTwoButtons,
      linkButtonTwo,
      textButtonTwo,
      "image": image.asset->url,
      alt
    },
    _type == "areasBlock" => {
      _type,
      areas[]{
        title,
        description,
        hasButton,
        link,
        buttonText,
        "image": image.asset->url,
      }
    },
    _type == "galery" => {
      _type,
      title,
      description,
      images[]{
        "image": asset->url,
        alt
      }
    }
  }
}[0]
`;
