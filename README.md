# producer-checklist
Text expansion email templates. Made with ❤️ and ⚡️.


## Nextjs
### Getting Started

First, run the development server:

```bash
nvm use 18.17.0
# or
volta install 18.17.0

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Email url creation

`<a href="mailto:
    RECIPIENT-LIST
    ?cc=CC-LIST
    &subject=SUBJECT
    &body=BODY-OF-EMAIL">LINK TO CREATE EMAIL</a>`

For multi-line body contents, use `%0A` at the end of each line.

