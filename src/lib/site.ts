export const PHONE_DISPLAY = "210-891-9457";
export const PHONE_HREF = "tel:+12108919457";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/**
 * Facebook Reel embeds.
 * Replace `url` with the full public Facebook video/reel URL.
 * Example: https://www.facebook.com/reel/1234567890
 */
export const FACEBOOK_VIDEOS: { title: string; url: string }[] = [
  { title: "Rooftop cleaning walkthrough", url: "https://www.facebook.com/reel/1763119288007432" },
  { title: "Bird & animal protection install", url: "https://www.facebook.com/reel/1529557345408827" },
];

export function facebookEmbedSrc(url: string) {
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url,
  )}&show_text=false&autoplay=false`;
}
