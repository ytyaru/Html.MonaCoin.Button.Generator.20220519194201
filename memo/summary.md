# 投げモナボタンを生成する

## どの画像を使うか

* PNGのみ使う（SVGとファイルサイズの差はほぼない）
* SVGのみ使う（SVGが表示できない環境もある）
* SVGとPNGを使う（SVGは明暗対応できる。けれどPNGはできない。なら両方に対応できる画像を作るべきか。そしたらSVGを使う理由がなくなる）

　せっかくSVGで明暗対応したが、PNGだけを使うことにした。

* PNGのほうが表示速度が早い
* SVGが表示できない環境もある
* SVGで表示しつつPNGでフォールバックすると明暗対応に差が出てしまう
* 明暗両用として画像をデザインしたものをPNGで使うのが最善
* PNGとSVGでファイルサイズにほぼ差がない
* 256x256以上だとSVGのほうが高品質
* 256x256以上で表示することは想定していない

　というわけで以下3画像が候補になる。

* mona-line-black.png
* monacoin-face-mouth-white.png
* monar-mark-gold.png

```html
<a href="javascript:..."><img src="画像URL"></a>
```
<a href="javascript:..."><img src="https://example.com/"></a>


綺麗に縮小する
* https://resizer.myct.jp/index.php
PNG圧縮
* https://www.iloveimg.com/ja/compress-image/compress-png
Base64
* https://lab.syncer.jp/Tool/Base64-encode/

