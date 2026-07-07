# TC Media

TC Media is a Next.js site for Thurston Community Media in Olympia, WA. The homepage presents a highly visual, section-based experience that highlights donations, media training, volunteering, facilities, membership, and testimonials.

## What’s Included

- A full-screen animated home page with multiple promotional sections
- Navigation for Classes, Services, Facilities, Volunteer, Membership, Events, and About
- Location and contact details in the footer
- Motion-based UI built with Framer Motion and Tailwind CSS

## Main Pages

- Home: overview of TC Media, donation prompts, learning highlights, volunteer callouts, facilities, membership, and testimonials
- Classes: class listings and upcoming content
- Services: service information page
- Facilities: facility highlights and cards
- Events: events page placeholder
- About: about page placeholder
- Volunteer: volunteer page placeholder

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Deployment

The deploy workflow (`.github/workflows/deploy.yml`) pushes to an EC2 instance via SSH on every push to `main`. Before it can run successfully, add the following secrets under **Settings → Secrets and variables → Actions** in the GitHub repository:

| Secret name | Description |
|-------------|-------------|
| `EC2_HOST`  | Public IP address or hostname of the EC2 instance |
| `EC2_USER`  | SSH username (e.g. `ubuntu` or `ec2-user`) |
| `EC2_KEY`   | Private SSH key (PEM format) used to authenticate |

The deploy script runs on the server:

```bash
cd /var/www/tcmedia
git pull origin main
npm install
npm run build
pm2 restart tcmedia
```

## Development

Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build the production app
- `npm run start` - run the production server
- `npm test` - placeholder test script

## Project Structure

- `app/` - route pages and global layout/styles
- `components/` - shared UI pieces such as the header, footer, logo, menu, and testimonials
- `public/` - static images and assets used throughout the site
