**How to run locally and change output directory:**

  1. Open project directory in terminal
  2. Enter `npm run start`
  3. Once loaded, open project in VS Code
  4. Find `App.js` and scroll to lines 29 and 30
  5. Here, enter the name of the desired output directory after `outputDirectory={'your_directory'}`
  6. Press `cmd + s` to save the new output directories
  7. Enter times and generate images!
  
**How to remove/add decimal to times:**
  1. Follow steps 1-4 above
  2. Scroll to lines 46 and 47
  3. To remove decimals, change `replace(/\r?\n|\r/g, '.0 ')` to `replace(/\r?\n|\r/g, ' ')`
  4. To add decimals, change `replace(/\r?\n|\r/g, ' ')` to `replace(/\r?\n|\r/g, '.0 ')`
  5. Save with `cmd + s`!
