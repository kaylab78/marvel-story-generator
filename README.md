# MARVELous Writing Prompt

## Description
The MARVELous Writing Prompt is a writing prompt generator for creative writers with an interest in the Marvel comic universe. It's purpose is to give the user inspration for their writing prompt.

Using the Marvel API, we are able to present to the user two random characters and one random quote through the Quotes API from RapidAPI for them to use in their writing. 

This generator can be used by creative writing classes, writing clubs, fanfiction writers, etc.

## Installation
In order to access this repository, clone it from GitHub using the command <samp>git clone git@github.com:kaylab78/marvel-story-generator.git</samp> in the command line interface.

## Usage
To view the deployed website, [click here](https://kaylab78.github.io/marvel-story-generator).

When the user opens the webpage, they are presented with a button that says, "Get Characters." When the user clicks this button, two characters from the Marvel universe appear on the page.
![The screen shows instructions for the user and has a black button with white letters that say, "Get Characters.](/assets/images/screenshot-1.png)

If the user doesn't like their character choices, then they can click the "Remix Characters" button to get two new characters.

If the user likes these choices for their writing prompt, then they click the "Accept" button to generate a random quote.
![The screen now shows Nighthawk and Nekra from the Marvel Universe. The "Get Characters" button now says, "Remix Characters," and a smaller black button appeared below the characters that says, "Accept."](/assets/images/screenshot-2.png)

To save their combination of the characters and quote, the user clicks the "Save" button. To clear their entire combination, the user clicks the "Clear" button.
![The screen now says, "The difference between where you are now and where you want to be is your reasoning capacity and actions. Hamis Kiggundu," who is the author of the quote.Two black buttons appeared at the bottom of the screen that say, "Save" and "Clear."](/assets/images/screenshot-3.png)

Once the combination is saved, the page is cleared for a new combination. All previous combinations appear at the bottom of the screen.
![The screen has been cleared of characters and quotes. Now in the bottom left corner, it says, "Nighthawk and Nekra. The difference between where you are now and where you want to be is your reasoning capacity and actions. Hamis Kiggundu."](/assets/images/screenshot-4.png)

## Technologies
[Foundation for Sites](https://get.foundation/sites/docs/)

[jQuery](https://jquery.com/)

[Marvel API](https://developer.marvel.com/)

[MIT License](https://choosealicense.com/licenses/mit/)

[Quotes API](https://rapidapi.com/martin.svoboda/api/quotes15/)

## Future Development
One thing to address in a future version of this webpage is that some of the Marvel characters don't have photos associated with them. When that's the case, the API returns an image that says, "Image not available."
![The screen shows two images of silhouettes, and the images say, "Image not available."](/assets/images/screenshot-5.png)

A possible way to fix this would be to include an if statement that when the thumbnail path is equal to "image_not_available," the script chooses a new index number until it comes to a character that has an image associated with it.

Another thing to address would be branding the webpage to match the aesthetic that Marvel has created for themselves.

Plus, it would be nice if the user could choose to get random characters from a specific series. This would need to use a different variation on the API call. 

In addition to these, we would also like to address the fact that the API will only call 100 consecutive results at a time, so the character choices aren't truly random. And if data for all 100 characters is called, there is a significant delay in loading on the page. This will lead to a negative user experience.

## Credits
*Function md5().* Function md5(). [http://www.md5.cz/](http://www.md5.cz/).

*Images.* Marvel. [https://developer.marvel.com/documentation/images](https://developer.marvel.com/documentation/images).

*Interactive API.* Marvel. [https://developer.marvel.com/docs#!/public/](https://developer.marvel.com/docs#!/public/).

## License
Copyright (c) 2022 Kayla Backus, Mitchel Eide, Angela Gustafson, Tim Leonard, Ryan Rogers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.