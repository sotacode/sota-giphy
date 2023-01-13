# sota-gif-expert-app
From begin, sorry for my english, i'm practice the language.

This is an application with calls to GIPHY's API. where gifs are deployed depending on what we write in the input.

## Code Explanation
First we begin from the components of page, and then i explain others decision of the code.

### Components

![Components](https://github.com/sotacode/sota-giphy/blob/main/assetsReadme/pagesotagiphy.png?raw=true)

- **GifExpertApp**: Is the principal component, this would be the whole page.
- **AddCategory** (green square): Is a component that receives as a property a function where we can emit an event to the parent component, and adds a new category in the array of categories present in the parent component (which uses the "useState" hook to set its value and tell it to react which should render the component again).
- **GifGrid** (blue squares): Is a component that is responsible for storing n amount of gifs within it. There is a GifGrid for each category present in the "categories" array of the parent component.
- **GifItem** (red squares): It is the component that is displayed as a card where we store a gif and the title of the gif that is obtained when consulting the GIPHY API.

### Code implementation decisions

We created a custom hook to handle the array of gifs and whether they are still being loaded from the API or not.
This was done to avoid extra rendering on the component itself when updating either the gif array or the isLoading boolean.
So when updating the array of categories, the custom hook is triggered where we set two values in the same function, which thanks to react 18, does not render until the function of the hook ends.
