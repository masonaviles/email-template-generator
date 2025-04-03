# 📝 Producer Checklist

This is a template-driven checklist and project scaffolding tool for producers and PMs to streamline workflows across creative, development, QA, and launch phases. Built with **Next.js**, **Tailwind CSS**, and **Chakra UI**, the app supports importing/exporting projects and dynamically generating templated emails for stakeholder communication.

---

## 🔧 Tech Stack

- ⚡ Next.js 14
- 🎨 Tailwind CSS 3
- 🧱 Chakra UI
- ⚛️ React Icons
- 🧩 Dynamic template rendering
- 🗃️ LocalStorage-based project save/load
- 📤 Export/Import project data
- 🌒 Light/Dark mode toggle

---

## 🛠 Getting Started

```bash
nvm use 18.17.0
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
app/
  api/templates         # Template API endpoint
  components/           # Forms, templates, import/export
  context/              # Global state using React Context
  styles/globals.css    # Theme + custom styles
  types/                # TypeScript interfaces
  layout.tsx            # App shell with theme toggle
  page.tsx              # Home page entry
  providers.tsx         # Chakra provider
atext/template-files/   # Source styles for exports
public/                 # Static assets
```

---

## 📬 Email Template Rendering

Each template can render email content dynamically using form inputs.
Example email generation HTML:

```html
<a href="mailto:recipient@example.com?subject=Kick-off&body=Hello%0ALet’s%20begin.">
  Create Email
</a>
```

Use `%0A` for line breaks and encode all URL params.

---

## 📦 Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build production app
npm run lint      # Lint with ESLint
npm run clean     # Remove .next and node_modules
npm run deploy    # Deploy via multidev
npm run preview   # Preview deployment
```

---

## 🌗 Dark Mode

Toggle via the top-right button in the app. CSS variables and Tailwind utilities adapt automatically.

---

## 📤 Export / Import

Projects can be exported to JSON and re-imported using the UI.
All project data is stored in localStorage by default.

---

## 🧪 Testing

You can integrate `jest` with React Testing Library and Chakra components if needed.
Jest is included as a dev dependency.

---

## 📄 License

MIT — feel free to fork, clone, or build on top of it.

---

Built with ⚡️ by Mason Aviles
