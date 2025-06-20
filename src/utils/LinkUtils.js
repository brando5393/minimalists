// Utility functions for link detection and processing

export const detectLinks = (text) => {
  // Enhanced URL regex that catches more URL patterns
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}[^\s]*)/gi;
  const matches = text.match(urlRegex);
  return matches || [];
};

export const isValidUrl = (string) => {
  try {
    // Add protocol if missing
    const url = string.startsWith('http') ? string : `https://${string}`;
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

export const processTextWithLinks = (text) => {
  const links = detectLinks(text);
  
  if (links.length === 0) {
    return { hasLinks: false, text, links: [] };
  }

  return {
    hasLinks: true,
    text,
    links: links.filter(isValidUrl)
  };
};

export const renderTextWithLinksAndPreviews = (text, LinkPreviewComponent) => {
  const { hasLinks, links } = processTextWithLinks(text);
  
  if (!hasLinks) {
    return text;
  }

  let processedText = text;
  const elements = [];
  
  links.forEach((link, index) => {
    const linkKey = `link-${index}`;
    const placeholder = `__LINK_PREVIEW_${index}__`;
    
    // Replace the link in text with placeholder
    processedText = processedText.replace(link, `${link}${placeholder}`);
    
    // Store the preview component for this link
    elements.push({
      placeholder,
      component: <LinkPreviewComponent key={linkKey} url={link} />
    });
  });

  // Split text by placeholders and insert components
  let parts = [processedText];
  
  elements.forEach(({ placeholder, component }) => {
    const newParts = [];
    parts.forEach(part => {
      if (typeof part === 'string' && part.includes(placeholder)) {
        const splitParts = part.split(placeholder);
        newParts.push(splitParts[0]);
        newParts.push(component);
        newParts.push(splitParts[1]);
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts.filter(part => part !== '');
};

const LinkUtils = {
  detectLinks,
  isValidUrl,
  processTextWithLinks,
  renderTextWithLinksAndPreviews
};

export default LinkUtils;
