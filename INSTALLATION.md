# Using google-streetview-comb
1. Copy the [index.js](index.js) file to the location you will be running the program from. Ensure that Node.js is installed and the script can make `fetch()` requests to the Internet.
2. Customize your settings using the definitions at the beginning of the script:
   | option | purpose | type | recommended |
   | ------ | ------- | ---- | ----------- |
   | `scale` | The number of degrees the script will add to the input coordinates each time it checks a location, effectively controlling how thorough your search is. Smaller numbers will produce more accurate results, but will take longer to run. | `integer` | `0.01` |
   | `date`  | The date (`YYYY-MM`) for which matching results will be returned. | `string` | Whatever you need it to be |
   | `key`   | A Google Maps API key, required for the script to function. [This page](https://developers.google.com/maps/documentation/javascript/get-api-key) has more information. | `string` | A working API key |
   | `lat1`  | The latitude of the bottom left corner on the rectangle area to search. | `integer` | Anything other than `0` |
   | `long1` | The longitude of the bottom left corner on the rectangle area to search. | `integer` | " |
   | `lat2`  | The latitude of the top right corner on the rectangle area to search. | `integer` | " |
   | `long2` | The longitude of the top right corner on the rectangle area to search. | `integer` | " |
3. Navigate to the directory where `index.js` is and run `node .` to start the program. If there is more than one file in the directory, consider moving the script to its own directory before running the command.
4. Be patient. The script can take a while to run, depending on the size of the area and the rate at which the checks are made. You will receive a confirmation in the console when the script has finished running. Whenever a matching result is found, it will be output in the console immediately. See [this page](https://developers.google.com/maps/documentation/streetview/overview) for more information on the Google Maps API response format.
<br><br>
# Running in the background
1. Follow steps 1 and 2 above.
2. Instead of running the start command, run `nohup node . &` and the script will start running as a background process. This is useful in environments such as GitHub Codespaces where exiting the Codespace will also exit the terminal.
3. You can view logs in the `nohup.out` file that should be created in the same directory as `index.js`.
4. To stop the process, take note of the process ID outputted when you ran the `nohup` command, run `fg <process ID>`, then use CTL+C to exit the script.
