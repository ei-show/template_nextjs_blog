## 脱WP！！Next.jsで作る簡単blog

---

### 使用する技術やサービス

---

#### 技術
* [Next.js](https://nextjs.org/)

#### サービス
* [GitHub](https://github.com/)
* [Vercel](https://vercel.com/)
* [MicroCMS](https://microcms.io/)

---

### 使い方

1. サービスはそれぞれアカウントを作成する。
2. VercelはGitHubアカウントと連携する。
3. GitHubにblog用でリポジトリを作成する。
4. 作ったリポジトリをVercelに連携する。
5. `git push`してVercelで表示されることを確認する。
6. MicroCMSのAPIkeyを取得して、`.env.development.local`を修正する。
7. URLを修正する。
    * `pages/index.js`
    * `pages/blogs/[id].js`
8. `git push`してVercelで表示されることを確認する。
9. よしなに修正する。

---

#### 補足

##### モジュールのインストール

```zash
npm install
```

---

