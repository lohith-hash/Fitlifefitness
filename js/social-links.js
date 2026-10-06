/* ---------- Social Account Links ----------
   All footer links intentionally use # placeholders.
   Replace the values below with your personal/official account URLs later.
*/
const SOCIAL_LINKS = {
    whatsapp: "https://wa.me/919493497153?text=Hello%20FitLife%2C%20I%20want%20to%20choose%20the%20PRO%20plan%20%E2%82%B91%2C999%20per%20month.",
    linkedin: "https://www.linkedin.com/in/lokesh-pallagani-878324410?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/plokesh3617/?hl=en",
    youtube: "https://youtube.com/@codewithramesh-ai?si=YLDNp0SxvSVOFFJS",
    facebook: "https://www.facebook.com/61587167200060/",
    twitter: "https://x.com/codewithramesh",
};

export function initSocialLinks() {
    document.querySelectorAll("[data-social-link]").forEach(link => {
        const key = link.dataset.socialLink;
        if (SOCIAL_LINKS[key]) link.href = SOCIAL_LINKS[key];
    });
}
