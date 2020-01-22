---
title: Callouts
---

import Example from "./example.mdx"

# Callouts

Callouts are helpful when drawing attention to important information.

To add a callout in your topic, use the following syntax:

```jsx
<Callout type="tip" header="Short description or title">
  Place message about a tip here.
</Callout>
```

Sample output:

<Callout type="tip" header="Short description or title">
  Place message about a tip here.
</Callout>

To use markdown inside a callout, add a space between the tag and content:

```jsx
<Callout type="tip" header="Short description or title">
  Place **message** about a tip here.
</Callout>
```

Output:

<Callout type="tip" header="Short description or title">

Place **message** about a tip here.

</Callout>

## Tip

<Callout type="tip" header="Good job!">
  This is a tip callout that uses content from another file.
  <Example />
</Callout>

## Info

<Callout type="info" header="Whoah!">
  This feature requires administrative access, so it may prompt you for an
  administrative password at the command line. It does not permanently elevate
  permissions for the dev process but instead, launches a privileged subprocess
  to execute one command.
</Callout>

## Warning

<Callout type="warning" header="Dang!">
  This is a warning callout
</Callout>

## Error

<Callout type="error" header="Oops!">

These Callouts also support **markdown**!

However, they are supposed to be _simple_ message boxes, so should they?

| Header 1 | Header 2     |
| -------- | ------------ |
| Content  | More content |

</Callout>
