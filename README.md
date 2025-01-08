genuary 2025

link for for day three 42 lines of code

playable commodore 64 game

use j l i k to move the ball in the maze

get all the diamonds don't hit walls

https://stigc.dk/c64/basic/?s=2dVRtcpswEP2vU2yY_nAC7WjFNy2ZIUaxiTHySEoKvU6P0NN0eqecoSvhODiO_4He09tdvSdxMDWHSss9mLXSkiGMUIN4W7ONtrTy0vRMwEQIEgLv0OShGEZzqOENGsEcpGxZApNfZikcdDfY4PXfn-B7dVA7mcaiwKg8ffOomCuue9loaIYW1qpXmlG9R6Whc6XBKog5VRlqPbQrvL0ryxK8BnKRhEO0yvNvaTiDt7N4KsqMkLQa5Gg7X8NqKQ1DPFfGM2E8CWdOuORHtTh2amKh1nbNXg0tCYqTIPetLnvrIhT5oqMu4guNB6VbqWnTgWF8RaUszlQykV5ReVDWqj3DBDbKPD8g59VYjyFZVE31FJInlQf8Ub6f-V69SFhv5XrHkAyjGuA6h3CEEBJ-N0UFHq3fqp-w7jTtY5jBaagFNWeYe_c5w8KngzMK1UZaaL7MVfvOWDn4YXdyYjGH7tGBNQRdAHZLmBP4ipXfPvdMLXGWLKi7BTW8pKYL6tOROs6q0wdqtqD2C2p4Sc09dYQfziLH2yirUgfgDNyTbeeAcMBEO_DDjngG7kHE50jB_Sdgwijl_typvPfKgOpb5wCdvelspwa6J_xTz2Ixh1T2jk-h55_7RSz7rAcmlrW2cme8QXQXyS6q4-8O0MqW2rDMRYjap9u-W_mYj6GTu60hz_0wbpCY4zVSsSCJK6SSe5KpTYhE8-dloMZ5OXMhpkRwOA6QHAeQ9IRsmr2kCPDl88NSPP5D4HCg2OuApeK06h_CIDIspUySDMs-KGTvCq9_fztDZOu8g33zS97c3AQsu1T7Dw

link for day 7 to the google sheet

https://docs.google.com/spreadsheets/d/1_qjWHpUlCmgvyW7DlBEX4PDSoeRkPgpAXtcJPBhGbVA/edit?usp=sharing

---

day 8

[instagram day 8](https://www.instagram.com/reel/DEjx3veRSsZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)

some explanation of probabilty

Great point! You're absolutely right—if you don’t put the ball back in the bag, the probabilities would change because the number of balls left in the bag would decrease. However, in our situation, the analogy of pulling balls out of a bag assumes **replacement**—you always put the ball back before pulling the next one. This matches how computer-generated random characters work: every time a character is "picked," all 32 possibilities are equally available again.

Let’s rethink this explanation in a way that doesn’t rely on a bag analogy, but still makes sense.

---

### **A Better Explanation Without the Bag**

Imagine you have a magical machine that can spit out random characters—letters or spaces. Every time you press a button, the machine randomly picks one of 32 options: A, B, C, ... Z, or a space. Importantly, the machine doesn’t “remember” what it picked before. Every press is completely independent, so each character has the same chance of being chosen (1 out of 32).

---

### **Probability of a Specific Combination**

Now, let’s think about the chance of getting a specific sequence of characters:

#### **1. A Three-Letter Combination (like "art")**

- The first letter can be any of the 32 options. There’s a **1 in 32 chance** of it being "a."
- After the first letter, the second one also has a **1 in 32 chance** of being "r."
- Finally, the third letter has a **1 in 32 chance** of being "t."

Because the machine is random and doesn’t remember previous picks, the chances of each letter are independent. To calculate the total probability of getting "art," we multiply the probabilities of each step:

\[
\text{Probability of "art"} = \frac{1}{32} \times \frac{1}{32} \times \frac{1}{32} = \frac{1}{32,768}
\]

---

#### **2. A Four-Letter Combination (like "greg")**

For a four-letter sequence, it’s the same logic:

- The first letter has a **1 in 32 chance** of being "g."
- The second has a **1 in 32 chance** of being "r."
- The third has a **1 in 32 chance** of being "e."
- The fourth has a **1 in 32 chance** of being "g."

The total probability is:

\[
\text{Probability of "greg"} = \frac{1}{32} \times \frac{1}{32} \times \frac{1}{32} \times \frac{1}{32} = \frac{1}{1,048,576}
\]

---

### **Why Does the Length Matter?**

The longer the sequence, the harder it is to get that exact combination because you’re multiplying more tiny probabilities together. A three-letter word is much easier to find than a four-letter word because there are far fewer possible three-letter combinations (32,768) than four-letter combinations (1,048,576).

---

### **How Many Characters Do You Need?**

Let’s go back to how many characters you’re generating. If you’re creating a sequence of 1,000,000 characters, you have about 999,998 opportunities for a three-letter combination to appear. That’s why “art” shows up about 20 times—it’s not guaranteed, but statistically, that’s the average.

For “greg,” which is less likely, you’d need a much longer sequence to see it regularly. Based on the math, you’d need around **21 million characters** to have the same chance of seeing “greg” about 20 times on average.

---

### **Summary**

- The "bag" analogy works **only if you put the ball back** (replacement). Without replacement, probabilities would change, but that’s not how random character generation works in your program.
- Think of it like pressing a button on a machine that randomly spits out one of 32 options—each time is independent of the last.
- Longer combinations (like four letters) are much harder to get because there are exponentially more possibilities.
