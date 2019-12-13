---
title: Global variables
---

import GlobalVariable from "DocComponents/GlobalVariable"

## Declare and use global variables

Setting a global variable saves global search and replaces later. Declare global variables in the `/src/data/globalVariables.yml` file using the following syntax:

```yaml
<variable-name>: <some-variable>
```

### To use a global variable in a topic:

1. Import the global variable list into your topic.

   ```md
   import GlobalVariable from "DocComponents/GlobalVariable"
   ```

1. Declare or choose a variable in the `globalVariables.yml` file.

   > /src/data/globalVariables.yml

   ```yaml
   version: 1.0
   exampleVariable: This is an example variable
   hackTeam: Jekyll's Hyde
   ```

1. Use the variable inline within your topic content. This example contains two variables.

   ```gfm
   This is version <GlobalVariable name='version'/> of a Doc site created by <GlobalVariable name='hackTeam'/> Hackathon team!
   ```

   Sample response:
   This is version <GlobalVariable name='version'/> of a Doc site created by <GlobalVariable name='hackTeam'/> Hackathon team!
