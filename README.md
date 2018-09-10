[日本語 / Japanese](README_ja.md)

# Mastodon-Activity-Embed
![image](https://user-images.githubusercontent.com/14953122/38171126-f3f908ea-35cd-11e8-9455-f9a24268ff02.png)

![image](https://user-images.githubusercontent.com/14953122/38171131-081afb26-35ce-11e8-8536-6511b36413a2.png)   
Easy to display activities of your own instance.

## How to use
- **It needs Mastodon v2.1.2 or later, and `Publish aggregate statistics about user activity` must be enabled. (Please check administration panel.)**

### Only default theme and mastodon-light

```html
<iframe src="https://yuzulabo.github.io/Mastodon-Activity-Embed/embed.html?<Put your instance domain here.>" style="width: 100%;height: 190px;" frameborder="0" scrolling="no" id="mae-frame"></iframe>
<script>var t = document.querySelectorAll('link[rel=stylesheet]')[1].href;document.getElementById('mae-frame').src+='&'+(t.match(/mastodon-light/i)?'000':'fff')</script>
```

### Use custom theme

Please generate the code with [Embed-Generator](https://yuzulabo.github.io/Mastodon-Activity-Embed/generator.html).

Please add that code to Custom extended information or Instance description.   
![image](https://user-images.githubusercontent.com/14953122/45319012-93ca9e80-b579-11e8-987f-e72b3b35d1ca.png)

If you want to run this on your own server, you can download to use it.
