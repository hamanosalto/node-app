# ユーザー入力をファイルに保存する Node.js アプリケーション

このアプリケーションは、ユーザーがブラウザ上で入力したテキストデータをバックエンドで受け取り、`output.txt` というファイルにそのデータを保存するシンプルな Node.js アプリケーションです。Express と Body-Parser を使って、クライアントとサーバー間のデータ送受信を実現しています。

## 概要

- ユーザーがフォームにテキストを入力し送信。
- サーバー側（Node.js）でそのデータを受け取り、`output.txt` に書き込む。
- サーバー側でエラーハンドリングを行い、成功メッセージを返す。

## 使用技術

- **Node.js**: バックエンドの処理を行うための JavaScript 実行環境。
- **Express**: サーバーを構築するための軽量なウェブフレームワーク。
- **body-parser**: POST リクエストのボディデータを解析するためのミドルウェア。
- **fs** (File System): ファイルへの読み書きを行うための Node.js 標準モジュール。

## セットアップ方法

このアプリケーションをローカル環境で実行するには、以下の手順に従ってください。

### 1. リポジトリをクローン

以下のコマンドでリポジトリをクローンします：

```bash
git clone https://github.com/hamanosalto/node-app.git
cd node-app

2. 必要な依存関係をインストール
プロジェクトのディレクトリ内で以下のコマンドを実行して、必要なパッケージをインストールします。

npm install
サーバーは http://localhost:3000 で起動します。

4. ブラウザで確認
ブラウザで http://localhost:3000 にアクセスすると、テキストを入力するフォームが表示されます。フォームにテキストを入力し、「送信」ボタンをクリックすると、そのデータが output.txt に書き込まれます。

アプリケーションの動作
ユーザーがフォームにテキストを入力:ユーザーはフォームに任意のテキストを入力します。

送信:ユーザーが「送信」ボタンをクリックすると、入力されたデータが POST リクエストとしてサーバーに送信されます。
バックエンドでの処理:サーバーは受け取ったテキストデータを output.txt に追記します。ファイルが存在しない場合は自動的に作成されます。

レスポンス:サーバーは処理が成功したことを示すメッセージをクライアントに返します。
ファイル構成
node-app/
│
├── server.js          # Node.jsサーバーのバックエンドコード
├── index.html         # ユーザー入力用のHTMLフォーム
├── output.txt         # ユーザーが送信したデータが書き込まれるファイル
├── package.json       # プロジェクトの依存関係やメタデータ
└── node_modules/      # インストールされた依存モジュール（npm install後に生成）

注意点
output.txt ファイルに書き込まれるデータは追記されるため、既存の内容を保持したまま新しいデータが追加されます。
アプリケーションはローカルで実行することを想定しています。デプロイメントには追加の設定が必要です。
依存パッケージ
このプロジェクトは以下のパッケージに依存しています。

express: サーバーを構築するためのフレームワーク。
body-parser: HTTP リクエストのボディデータを解析するためのミドルウェア。
依存パッケージは npm install でインストールできます。

依存パッケージ
このプロジェクトは以下のパッケージに依存しています。
・express: サーバーを構築するためのフレームワーク。
・body-parser: HTTP リクエストのボディデータを解析するためのミドルウェア。
依存パッケージは npm install でインストールできます。
