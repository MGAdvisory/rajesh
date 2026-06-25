/* ============================================================
   MERIDIAN GLOBAL ADVISORY GROUP — CONTENT DATA FILE
   ============================================================
   This is the ONLY file you need to edit going forward.

   HOW TO ADD A NEW LINKEDIN POST:
   1. Copy one of the blocks inside `posts` below
   2. Paste it at the TOP of the list (newest first)
   3. Fill in title, excerpt, and url
   4. Save the file and redeploy — done.
   The website always shows the 3 most recent posts automatically.

   HOW TO ADD A NEW CLIENT TESTIMONIAL:
   1. Copy one of the blocks inside `testimonials` below
   2. Paste it at the TOP of the list (newest first)
   3. Fill in name, role, company, and quote
   4. Save the file and redeploy — done.
   ============================================================ */

const SITE_DATA = {

  posts: [
    {
      title: "UK & US are quietly auditing companies over their 'Dubai expats' — and most UAE employers have no idea.",
      excerpt: "The larger risk may be the corporate blind spot. In today's environment, tax authorities are increasingly focused on substance over form.",
      url: "https://www.linkedin.com/posts/rajeshvijay26_internationaltax-permanentestablishment-corporatetax-share-7475772182296559616-PzVu",
      date: "2026-07"
    },
    {
      title: "SAP support for ECC ends in 2027 — most Gulf CFOs are not ready.",
      excerpt: "The four things that determine whether a Gulf S/4HANA transformation delivers, or quietly fails.",
      url: "https://www.linkedin.com/posts/rajeshvijay26_sap-s4hana-financetransformation-activity-7471454017815134209-H5zp",
      date: "2026-07"
    },
    {
      title: "SAP S/4HANA does not fail in the Gulf. The finance function does.",
      excerpt: "Why most SAP S/4HANA implementations underdeliver — and the four design decisions that separate transformations that work from those that quietly disappoint, drawn from 25 years of finance-led ERP leadership.",
      url: "https://www.linkedin.com/posts/rajeshvijay26_sap-s4hana-financetransformation-activity-7471454017815134209-H5zp",
      date: "2026-06"
    }
    /* ADD YOUR NEXT POST ABOVE THIS LINE — newest first.
    Example to copy:
    ,{
      title: "Why IPO readiness starts in the CFO's office, not the investment bank's.",
      excerpt: "A short description of what the post is about — 2 to 3 sentences.",
      url: "https://www.linkedin.com/posts/your-post-url-here",
      date: "2026-07"
    }
    */
  ],

  testimonials: [
    /* ADD YOUR TESTIMONIALS HERE — newest first.
    Example to copy:
    {
      quote: "Rajesh brought clarity to our SAP transformation that our internal team could not. The closing cycle improvement alone paid for the engagement.",
      name: "Client Name",
      role: "CEO",
      company: "Company Name"
    },
    */
  ]

};

// IMPORTANT: explicitly attach to window so renderInsights()/renderTestimonials()
// in index.html can always find it, regardless of script loading context.
window.SITE_DATA = SITE_DATA;
