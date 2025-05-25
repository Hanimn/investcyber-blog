# InvestCyber Blog

This is the repository for the InvestCyber Blog, a cybersecurity-focused blog built with Hugo and the PaperMod theme.

## Prerequisites

Before you begin, ensure you have [Hugo](https://gohugo.io/getting-started/installing/) installed on your system.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Hanimn/investcyber-blog.git
    cd investcyber-blog
    ```

2.  **Initialize and update the theme submodule (PaperMod):**
    ```bash
    git submodule init
    git submodule update
    ```
    If you are cloning for the first time and want to include the theme, you can use:
    ```bash
    git clone --recurse-submodules https://github.com/Hanimn/investcyber-blog.git
    cd investcyber-blog
    ```

## Running the Blog Locally

To start the Hugo development server and view the blog locally:

```bash
hugo server -D
```

This command will build the site with drafts included (`-D`) and serve it, typically at `http://localhost:1313/`. The server will automatically rebuild the site when you make changes to content or configuration.

## Adding a New Blog Post

To create a new blog post, use the Hugo CLI. This will generate a new Markdown file in the `content/posts/` directory, pre-filled with the front matter defined in `archetypes/default.md`.

1.  **Create the new post file:**
    Replace `your-post-title.md` with the desired filename for your post. Hugo will use the filename to generate the title in the front matter (e.g., `my-new-post.md` becomes `title = "My New Post"`).
    ```bash
    hugo new content posts/your-post-title.md
    ```
    For example:
    ```bash
    hugo new content posts/understanding-phishing-attacks.md
    ```

2.  **Edit the new post:**
    Open the newly created file (e.g., `content/posts/your-post-title.md`). It will look something like this, based on `archetypes/default.md`:

    ```markdown
    +++
    date = 'YYYY-MM-DDTHH:MM:SSZ' # The date and time of creation will be automatically filled
    draft = true
    title = 'Your Post Title' # This will be generated from the filename
    +++

    Your blog post content starts here...
    ```

3.  **Write your content:**
    Add your blog post content below the front matter (the section between the `+++` lines).

4.  **Set `draft = false`:**
    Once your post is ready to be published, change `draft = true` to `draft = false` in the front matter. Posts with `draft = true` will not be built in the production version of the site (unless you specifically build drafts).

5.  **Preview your post:**
    If the Hugo server is running (`hugo server -D`), your new post will be available for preview. If it was created as a draft, it will show up. If you've set `draft = false`, it will also show up.

## Building for Production

When you're ready to deploy your blog, you need to build the static site files. Hugo will generate these into the `public/` directory by default (this directory is ignored by Git in this project's `.gitignore`).

```bash
hugo
```

This command builds the site without drafts or future-dated content.

## Deployment

The contents of the `public/` directory can be deployed to any static web hosting service (e.g., Netlify, Vercel, GitHub Pages, AWS S3).

For example, if deploying to Netlify (which is the current setup for `invest-cyber.netlify.app`):
*   Connect your GitHub repository to Netlify.
*   Set the build command to `hugo`.
*   Set the publish directory to `public`.
*   Netlify will automatically build and deploy your site when you push changes to your main branch.

## Favicons

The site is configured to use `favicon.svg`. For broader compatibility, the following PNG favicons are also referenced in `hugo.toml` but are currently commented out:
*   `assets/favicon-16x16.png`
*   `assets/favicon-32x32.png`
*   `assets/apple-touch-icon.png`

To enable these:
1.  Generate these PNG images from `assets/favicon.svg`.
2.  Place them in the `assets/` directory.
3.  Uncomment the corresponding lines in `hugo.toml`.

---

This `README.md` provides a comprehensive guide for managing and updating the InvestCyber Blog.
