---
sidebar_position: 1
title: Effort Calculator
description: Calculate your work effort card
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Effort Calculator

![Effort Calculator](/img/features/effort.png ':size=100%')

## How to use

There are two ways to use this fearute:
- Auto-response
- Reaction trigger

<Tabs>
  <TabItem value="auto" label="Auto-Response" default>
    <ul>
      <li>If you are owner or admin on a server, create a channel with <code>keqing</code>, <code>effort</code> or <code>management</code> on the channel name, for example: </li>
        <ul>
          <li><span class="mention">#effort-calculator</span></li>
          <li><span class="mention">#keqing-bot</span></li>
          <li><span class="mention">#karuta-management</span></li>
        </ul>
      <li>Make sure <span className="mention">@Keqing</span> has proper permissions (<code>SEND_MESSAGE</code>, <code>READ_MESSAGES</code>, <code>READ_MESSAGE_HISTORY</code>, <code>EMBED_LINKS</code>)</li>
      <li>Now you can type <code>kwi [your card code]</code> on the channel the you just set it up.</li>
    </ul>
  </TabItem>
  <TabItem value="reaction" label="Reaction Trigger">
    <ul>
      <li>Make sure <span className="mention">@Keqing</span> has proper permissions (<code>SEND_MESSAGE</code>, <code>READ_MESSAGES</code>, <code>READ_MESSAGE_HISTORY</code>, <code>EMBED_LINKS</code>)</li>
      <li>Type <code>kwi [your card code]</code> on a channel.</li>
      <li>Now react with 🔢</li>
    </ul>
  </TabItem>
</Tabs>

:::info Important Note
If your card's condition is **mint** the calculation should be **mostly accurate**, However if your cards is not mint yet, the calculations are **less accurate**.
:::

## Other calculation info

### **Vanity** 
What is vanity? The lower card's print number relative to amount printed, the more this effort modifier will increase. Thus, card will gain in this modifier `as time passes`.
### **Max Vanity**
A condition where your card is S grade or reaches Maxed A grade Vanity. High printed cards **most likely will never** reaches this condition.
### **"X" Toughness**
You can gain it from `dating system`.
### **Max Possible Effort** 
The formula is (Current Effort (Mystic + Framed)) + (S Vanity / Maxed A Vanity) + (S Toughness) + Additional Wellness. If your card is _high printed_, **Do not** look at the `Max A. vanity + S. tough.` stats.

## FAQ

> Can i disable Effort calculator in some channels?
>
> — <span class="mention">@Some random owner</span>

#### Answer
- We have `achannel` command, you can use that
- Go to the channel you want and run the command.
- Run the `achannel` command and then click the <button class="btn btn-primary">Toggle features</button> button, select the `Effort calculator` option and done