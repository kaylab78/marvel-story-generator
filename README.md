# MARVEL-ous Writing Prompt

## Description
The MARVELous Writing Prompt is a writing prompt generator for creative writers with an interest in the Marvel comic universe. It's purpose is to give the user inspration for their writing prompt.

Using the Marvel API, we are able to present to the user two random characters and one random quote through the Quotes API from RapidAPI for them to use in their writing. 

This generator can be used by creative writing classes, writing clubs, fanfiction writers, and more.

## Installation
In order to access this repository, clone it from GitHub using the command <samp>git clone git@github.com:kaylab78/marvel-story-generator.git</samp> in the command line interface.

## Usage
To view the deployed website, [click here](https://kaylab78.github.io/marvel-story-generator/).

When the user opens the webpage, they are presented with a button that says, "Get Characters." When the user clicks this button, two characters from the Marvel universe appear on the page.
![The screen shows a red header with white letters that say, "MARVEL-OUS WRITING PROMPT." The instructions for the user reads, "Click the button below to get two random Marvel characters to use in your story. If you're satisfied with the characters given to you, click 'Accept' to see a random quote and use it in your story. If you want to choose new characters, click 'Remix Characters.' Click the 'Save' button at the bottom of the page to save your selection of characters and quote. and has a red button with white letters that say, 'Get Characters.'"](/assets/images/screenshot-1.png)

If the user doesn't like their character choices, then they can click the "Remix Characters" button to get two new characters.

If the user likes these choices for their writing prompt, then they click the "Accept" button to generate a random quote.
![The screen now shows two Marvel characters. Sugar Man is a monster with a large head. Supreme Intelligence is a giant green head. The "Get Characters" button now says, "Remix Characters," and a smaller red button appeared below the characters that says, "Accept."](/assets/images/screenshot-2.png)

To save their combination of the characters and quote, the user clicks the "Save" button. To clear their entire combination, the user clicks the "Clear" button.
![The screen now says, "A dream you dream alone is only a dream. A dream you dream together is reality. Yoko Ono," who is the author of the quote. Two red buttons appeared at the bottom of the screen that say, "Save" and "Clear."](/assets/images/screenshot-3.png)

Once the combination is saved, the page is cleared for a new combination. All previous combinations appear at the bottom of the screen.
![The screen has been cleared of characters and quotes. Now in the bottom left corner, it says, "Sugar Man & Supreme Intelligence. A dream you dream alone is only a dream. A dream you dream together is reality. Yoko Ono."](/assets/images/screenshot-4.png)

## Technologies
- [Fontspace: Heroes Assemble Font](https://www.fontspace.com/heroes-assemble-font-f32811)
- [Fontspace: Marvel Font](https://www.fontspace.com/marvel-font-f32182)
- [Foundation for Sites](https://get.foundation/sites/docs/)
- [jQuery](https://jquery.com/)
- [Marvel API](https://developer.marvel.com/)
- [MIT License](https://choosealicense.com/licenses/mit/)
- [Quotes API](https://rapidapi.com/martin.svoboda/api/quotes15/)

## Future Development
One thing to address in a future version of this webpage is that some of the Marvel characters don't have photos associated with them. When that's the case, the API returns an image that says, "Image not available." A possible way to fix this would be to include an if statement that when the thumbnail path is equal to "image_not_available," the script chooses a new index number until it comes to a character that has an image associated with it.
![The screen shows two images of silhouettes, and the images say, "Image not available."](/assets/images/screenshot-5.png)

We would like to develop the project so that the user could choose to get random characters from a specific series. This function would need to use a different variation on the Marvel API call. 

Another development to make is to link the characters to their Wiki pages. Because there are over 1,500 characters listed in the Marvel universe, it would be helpful for the user to be able to quickly learn more about the characters in the generator.

In addition to these, we would also like to address the fact that the API will only call 100 consecutive results at a time, so the character choices aren't truly random. And if data for all 100 characters is called, there is a significant delay in loading on the page. This will lead to a negative user experience.

And unfortunately because we don't have control over the Quotes API, there have been a couple instances of inappropriate or offensive quotes. IN a future development of this project, those should be filtered out.

## Credits
*Function md5().* Function md5(). [http://www.md5.cz/](http://www.md5.cz/).

*Images.* Marvel. [https://developer.marvel.com/documentation/images](https://developer.marvel.com/documentation/images).

*Interactive API.* Marvel. [https://developer.marvel.com/docs#!/public/](https://developer.marvel.com/docs#!/public/).

## License
Copyright (c) 2022 Kayla Backus, Mitchel Eide, Angela Gustafson, Ryan Rogers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.