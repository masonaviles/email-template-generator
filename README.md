# producer-checklist
Text expansion templates for Level Studios Producer's: Automate a list of emails and radars created for Marcom projects. Made with ❤️ and ⚡️.

https://level-studios.atlassian.net/browse/SKOR-2 Snippets: Producer checklist 

The current Producer checklist is being hosted as a Numbers spreadsheet [here](https://lion.app.box.com/s/2qw77cmik244qpc77hfbe3gxxgy3vz6k).
We previously used [aText](https://trankynam.com/atext/) but now this is a Nextjs webapp.

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

## What we need from this system:
- An ability to fill in a particular field once (such as Project Name) and have it populate to a bunch of emails.
- A system that can create emails, whether that's through text expansion and macros or through setting the subject and body of the email through HTML mailto: links.
- A way to save the links to create the emails on demand, as not all the comms will be made when we set up the information.
- Use the same information to fill out Radars, possibly through [Chirp's "Bulk Create Radars Using CSV"](https://chirp.apple.com/newproblem/create-via-csv) functionality.

## Nice to Haves:
- Some method of persistence. This way, values can be changed over time
- A good way to put in multi-line body contents without needing to add `%0A` to the end of each line manually.
- An ability for Producers to update and modify the text being replaced for all future templates, without needing to rely on developers.
- An easy way to find and replace within all templates. 
- Make it PRETTY.

## Email url creation

`<a href="mailto:
    RECIPIENT-LIST
    ?cc=CC-LIST
    &subject=SUBJECT
    &body=BODY-OF-EMAIL">LINK TO CREATE EMAIL</a>`

For multi-line body contents, use `%0A` at the end of each line.

