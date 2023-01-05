# Morph Tester	
import Color from '../../src/components/color.tsx'

![Morph Tester](/img/features/morph.png ':size=100%')

We also provide another feature: **Morph testing**! This feature is still in beta phase, so it's free for everyone to use. At the moment, it cannot test any cards that you own; it can only test one color for the morph (aside from white). Character names are hidden since inaccurate colors are shown otherwise. The usage of this feature is similar to frame testing, with an additional parameter: the hex code for the morph color.


:::info
Non-premium servers can only use test with 1 type only (HUE), upgrade to premium version to be able to test for 6 types
:::

### How to use
- Search for the character through `k!lookup` 
- Select the corresponding edition
- React with 🖌️.
- Type the frame name with the hex color next to it, example: `Broken Mirror #ff0000`
<img src="https://cdn.discordapp.com/attachments/910106115444977694/977499446805942332/unknown.png" style={{maxWidth:'500px', margin: '20px 0'}}/>

- Select the Morph Type **(Premium only)**
<img src="https://cdn.discordapp.com/attachments/910106115444977694/977499510827794452/unknown.png" style={{maxWidth:'500px', margin: '20px 0'}}/>

- Done ;) <br/>
<img src="https://cdn.discordapp.com/attachments/910106115444977694/977499609603645500/unknown.png" style={{maxWidth:'500px', margin: '20px 0'}}/>

:::info
- Non-premium servers can only test using `Hue` type
- What are morph types? It's the Blending type. Just experiment with it for now since we're still not sure which one is used by Karuta
:::

### Color picker
<Color />