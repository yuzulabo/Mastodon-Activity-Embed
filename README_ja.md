# Mastodon-Activity-Embed
![image](https://user-images.githubusercontent.com/14953122/38094048-af133b7e-33a7-11e8-8e26-ce8003ecb1ed.png)

![a59e51510328ffb3752141b6f1130ddb](https://user-images.githubusercontent.com/14953122/35373826-a17a5a60-01e3-11e8-87ba-d594756b1002.png)   
詳細な統計情報を簡単に表示するやつです。

## 使い方
- **Mastodon v2.1.2以上で、`ユーザーアクティビティに関する統計を公開する`が有効化されている必要があります。**

### デフォルトテーマとライトテーマのみ

```html
<iframe src="https://yuzulabo.github.io/Mastodon-Activity-Embed/embed.html?(あなたのインスタンスのドメイン)" style="width: 100%;height: 190px;" frameborder="0" scrolling="no" id="mae-frame"></iframe>
<script>var t = document.querySelectorAll('link[rel=stylesheet]')[1].href;document.getElementById('mae-frame').src+='&'+(t.match(/mastodon-light/i)?'000':'fff')</script>
```

### カスタムテーマを使用する

[Embed-Generator](https://yuzulabo.github.io/Mastodon-Activity-Embed/generator.html) でコードを生成してください。


このコードを **サイト設定 → カスタム詳細説明** か **インスタンスの説明** に貼り付けてください。   
![image](https://user-images.githubusercontent.com/14953122/45319084-c4aad380-b579-11e8-8da2-16074c15c9c9.png)

または、あなたが管理するサーバーにダウンロードして使用する事もできます。