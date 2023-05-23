# gulp-ts-webpack-pack
练习：基于 Gulp + TypeScript + Webpack 打包组件库

```
gulp-ts-webpack-pack
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 3008e0329be54768d3b2c445b4d661a3de0b68
│  │  ├─ 01
│  │  │  └─ 755d563c74009fcc177bd125a8abbcf6fbc540
│  │  ├─ 02
│  │  │  └─ 1224975d766719caf0ab1e6ac6d42f503cedc8
│  │  ├─ 08
│  │  │  ├─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  │  └─ cf7890f4e89e0db3917610d1195020923a00ac
│  │  ├─ 09
│  │  │  └─ 8f754db1295d7562f7adbc7383da7fcc9246d4
│  │  ├─ 15
│  │  │  └─ 3cce06c5a879cdc01a8848de6120b284236c99
│  │  ├─ 16
│  │  │  └─ 4a992ede13ef77940ebe132d3313e822167a02
│  │  ├─ 1b
│  │  │  └─ 23662eefe7ac9836532700d5e43fc74d714229
│  │  ├─ 1c
│  │  │  └─ 1b0c8c90c01fbb97b038925740adf5a25b9a2d
│  │  ├─ 1d
│  │  │  ├─ 3d4464088072c986b90b7fdce6b7b615e377d9
│  │  │  ├─ 753e585ce835a67371f6c078fa804612e0ea84
│  │  │  └─ a69febff1e704b61775e799e0bb2d42fc729e9
│  │  ├─ 1e
│  │  │  └─ 550e6cf6b77e26396b9f8331faf44477b037e4
│  │  ├─ 24
│  │  │  ├─ 8a629e621577f91f3626320fde5583e410e3c8
│  │  │  └─ c2034dcdd4e1eff6a05414788b503700643066
│  │  ├─ 25
│  │  │  └─ d5bbe67d861128b642d5ffdce527aed3e13949
│  │  ├─ 26
│  │  │  ├─ 8b52fff6d1a9313cc6dd06a3061f28c4fb4cdb
│  │  │  └─ fdd65f068fbdfdf294be1907c55ebf257b347c
│  │  ├─ 27
│  │  │  └─ 9dc400ea131e36763800cf0332bc36e4150c48
│  │  ├─ 2e
│  │  │  ├─ ac8721d57165409a1a3960c31b9096fbaf99e4
│  │  │  └─ bf4a6e38c693b394b78e76b591e18e4581a0a4
│  │  ├─ 36
│  │  │  └─ 0b37c6c2a61fca7721e6b35f8bd1d93be2eb09
│  │  ├─ 38
│  │  │  └─ 5e67b5b0b51eaacdc67eeba1a5dec04d25bc51
│  │  ├─ 3a
│  │  │  ├─ 0e7710c12dcec22efad4620b7968c50c40b855
│  │  │  └─ b8f03423c823a203338f920e6bd016f943575b
│  │  ├─ 3d
│  │  │  ├─ 06f707d6eb4da76859bbf1edac399d58027bea
│  │  │  └─ e24a8078c4a0dfcbf06c6103008d5ae08c1558
│  │  ├─ 3e
│  │  │  └─ 3f530bc9ad89a9987a9c106cbe5adbd2fb43e9
│  │  ├─ 43
│  │  │  └─ edd00f1739cca8994748d083a0262af1d8f80c
│  │  ├─ 46
│  │  │  ├─ 0e432d5a957d4dfebf5b43de5731bb231d25f0
│  │  │  └─ ab1d8a54adb72e1c2bcfb4e358f4189b50cd7b
│  │  ├─ 47
│  │  │  └─ 15ae91d3097d62cd26cce9b68dcbf11f4d5914
│  │  ├─ 48
│  │  │  └─ 97b463ab064aac2a446d73a7847d858c3ca908
│  │  ├─ 49
│  │  │  └─ f7e3f1750e259e12e6d07a263da1cb0f8f8fe3
│  │  ├─ 4a
│  │  │  └─ d8bdf3b3f58d4d5627abaf95fdadd864d171e6
│  │  ├─ 4b
│  │  │  └─ 41d058e87e4e4c78a372b6716f5d6272f9ad32
│  │  ├─ 4d
│  │  │  └─ 29575de80483b005c29bfcac5061cd2f45313e
│  │  ├─ 4e
│  │  │  └─ c4acfea228414b45923c7eb7d2c19db515b60e
│  │  ├─ 4f
│  │  │  └─ 5cae235aa9a6fd1ecfcb6d49b8ccecf8ca8319
│  │  ├─ 52
│  │  │  └─ eed34774d19cd76e7dd1c37da4ce33e628e6c9
│  │  ├─ 53
│  │  │  ├─ b1ec80115d8ee17a969ec2b1958963dd0bbd83
│  │  │  └─ c5e2eff65dce03bbed23dc99a6cbec31c203f2
│  │  ├─ 59
│  │  │  └─ 1a68ca29d5aa8d583792772398151b70ebe107
│  │  ├─ 5c
│  │  │  └─ 9a113a484d825b1f035bf79b0ad8d636d2499a
│  │  ├─ 5f
│  │  │  └─ 9443a177b2094ce57f97ab0a65030e3bb654a6
│  │  ├─ 64
│  │  │  ├─ 234d15ed1eceb37d63e9657b715c3fe06328da
│  │  │  └─ 53a79e0323a36369ea28ec4dec22f9b71461e0
│  │  ├─ 65
│  │  │  └─ 02359ef9cbdd0907dd88d7f3a2240ee07c3fbb
│  │  ├─ 67
│  │  │  └─ 71b8f57072e83e80196cb2cdcfa085883a8777
│  │  ├─ 6a
│  │  │  ├─ 7d6d8ef6a9e8c5a09da8ab3584a96b189d5260
│  │  │  └─ fa5471a3fb16c0bd74895e48147afca78d6de0
│  │  ├─ 6c
│  │  │  └─ 5c5081de49c5deea8223a3be8d10d3ecd0f3d2
│  │  ├─ 6d
│  │  │  └─ 35c5493806f4681eb289c3f8561635c052beab
│  │  ├─ 6e
│  │  │  └─ c0e51c100bf4a8562cf8d1aed6e7513db1e060
│  │  ├─ 6f
│  │  │  └─ e07f011af2084093031505463eacfdb402d66d
│  │  ├─ 71
│  │  │  └─ a8ecac18e340c244da0a902b86e55f4bb64da5
│  │  ├─ 73
│  │  │  ├─ 94a7c4cb15371d3a56a0092d52c66c06b0ded1
│  │  │  └─ d2c0e9e6a136c79bc2201dc671c70729270217
│  │  ├─ 74
│  │  │  └─ dc0dcd9719fdff5210e24a38b430b5cf4d43d4
│  │  ├─ 79
│  │  │  ├─ 67982c471293e9384a138a73522e9a59904f60
│  │  │  ├─ b251e228a0be9c133083f21a469d6c737aedb6
│  │  │  └─ fe603e49a7a98b2f857f764b739d766d44cb88
│  │  ├─ 7d
│  │  │  └─ f789a29536a6d8412fe43f4ef3480a271b5e74
│  │  ├─ 7f
│  │  │  └─ 6f6265380beb14afecac558bc5ff37b634d761
│  │  ├─ 85
│  │  │  └─ 3c3d98e9c1b311fc1665089a8997f98831152b
│  │  ├─ 86
│  │  │  ├─ 489fd138601f44468b1287a98e38a50d33a087
│  │  │  └─ 76513642417aeb89e7a33a8b6d8e59088e87cc
│  │  ├─ 8a
│  │  │  ├─ 61caafdfa8b2d1709ec3e074190445774381e8
│  │  │  └─ d74b843d2a999d21096fa374288fc7bf583ccf
│  │  ├─ 8b
│  │  │  └─ 735cc4639a101bf4dd62b39d836c6bd01abd89
│  │  ├─ 8d
│  │  │  └─ acf465197683399179476b8e950f0ac6400ebb
│  │  ├─ 8e
│  │  │  └─ 29b36dea7f04ae8729d8b33ecc05c3c9b0fe46
│  │  ├─ 91
│  │  │  └─ ba4d124646f2d8d33feab9b2371ec98f600158
│  │  ├─ 92
│  │  │  └─ 184dffe9e928216927306ae1702ed7e6e2c238
│  │  ├─ 97
│  │  │  └─ 74daab240bfbbc2c56bd7c631ba16062432f41
│  │  ├─ 99
│  │  │  └─ 772f849659a8b58295ef994265646484466889
│  │  ├─ 9a
│  │  │  └─ e69759110be5fa200a5a62af3b8c53770e9ec4
│  │  ├─ 9e
│  │  │  └─ acad45f7d2e27094e62d362155bd452a9696da
│  │  ├─ a1
│  │  │  ├─ 1777cc471a4344702741ab1c8a588998b1311a
│  │  │  └─ 2499e1e5a8824bcc777605ba140a099b9b6aca
│  │  ├─ a2
│  │  │  └─ 73b0cfc0e965c35524e3cd0d3574cbe1ad2d0d
│  │  ├─ a4
│  │  │  └─ e47a6545bc15971f8f63fba70e4013df88a664
│  │  ├─ a5
│  │  │  ├─ 4c6e5fdf497f1ba8d74dcd98253576b2ebb1bf
│  │  │  └─ debcae0419a397f1eeb426465c1331d5442714
│  │  ├─ a7
│  │  │  └─ c8d05eed40c2e554dc77a731894ef1c5d03f99
│  │  ├─ aa
│  │  │  └─ 069f27cbd9d53394428171c3989fd03db73c76
│  │  ├─ ab
│  │  │  └─ 57dfc75683e3c7026049d1a38e503a15408633
│  │  ├─ ac
│  │  │  ├─ 5c2bc41dcf3de944f7662d51fab32417ab44a8
│  │  │  └─ bd258df63a2b9f9af095239d4cb63d6d99e4b9
│  │  ├─ af
│  │  │  └─ 29caffac8b350fa9fea9f0d278628ddc9f9bd9
│  │  ├─ b8
│  │  │  ├─ 36fd6875f3c9a707144d486ec44e4094dc2642
│  │  │  ├─ 7cb00449efa5b6131f56b7e45cc63eddf37373
│  │  │  ├─ b0a55effd6e828a4a0b016f9c202995865564a
│  │  │  └─ d37b6eff5f98e2acc57c88609cd0a3a0c09e30
│  │  ├─ b9
│  │  │  └─ 9a05ad98ae2d84f432b7a00cf533be451f3308
│  │  ├─ ba
│  │  │  ├─ 48c7dffb4fc4eaa1d4740d0983ff86e72d9d0c
│  │  │  └─ 70149fee49be011542595b02ba062d8c831d9b
│  │  ├─ bd
│  │  │  └─ d737e40c916f7fc47eebbf3e0165a65363fa20
│  │  ├─ be
│  │  │  └─ 15c48fa559b25a92cab02cdf2cc6aa1c0ec971
│  │  ├─ bf
│  │  │  └─ 6d16e7fa8162e651979a44455976775ac507ca
│  │  ├─ c2
│  │  │  └─ 147b3940f814d688d15ce6b6db6105560daee0
│  │  ├─ c6
│  │  │  ├─ 6afbe457e81bc6bd284cc4b4bad1c33f1369ff
│  │  │  └─ da12d4b411f3e6ceb90f3b3f384caddbff9bdd
│  │  ├─ ca
│  │  │  └─ c360de9275cd9e92111d2317367a41208e3291
│  │  ├─ cf
│  │  │  └─ f251dc6e85334a4b46f5cd07e0e20e25562071
│  │  ├─ d3
│  │  │  └─ e3512cc807a8aa2f5192aceef39d45d0fdddf3
│  │  ├─ d6
│  │  │  └─ 229ac79c640c3ae667216627682c129042b84b
│  │  ├─ d8
│  │  │  └─ ce889e6e07766c5db51d2fcda647f1190adea2
│  │  ├─ dd
│  │  │  └─ 513a9ebc753e33b570b1f2b2661ce952091588
│  │  ├─ e2
│  │  │  ├─ 6fd8d3588225e0098f5fe417689f21c0c5ed7b
│  │  │  └─ e0834a3cda355da63a86bf736c75dd497d30c1
│  │  ├─ e6
│  │  │  └─ 600363da428df78b2d88cdf1f96d3ca220532b
│  │  ├─ e8
│  │  │  └─ 194846b65e67145d5df6bdc0279e8acf769760
│  │  ├─ e9
│  │  │  └─ e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
│  │  ├─ f2
│  │  │  ├─ 551e41616ada5f3407142715cc0994e83c1b57
│  │  │  └─ 8d0dc68404b7b5ac9039ff82e15dc774ddbfe3
│  │  ├─ f3
│  │  │  └─ 16d37772c00aa32e726ff6d36a0fde453c6231
│  │  ├─ f4
│  │  │  └─ b40c8d27efb65bc480b8aba6a9e83dce9f51bb
│  │  ├─ f5
│  │  │  └─ cae453f3f3d5261ba6507939ea8b6ebaea0d09
│  │  ├─ f9
│  │  │  └─ 3434b8d5c47385c5ef9a658e717f078ab5c4d2
│  │  ├─ fa
│  │  │  └─ 1772b3f98b641ec53be85cd03a9dec69046b1b
│  │  ├─ fc
│  │  │  └─ 44b0a3796c0e0a64c3d858ca038bd4570465d9
│  │  ├─ fd
│  │  │  ├─ 026bf2f25d85a9743e8652f240dd7329432e1d
│  │  │  ├─ 867812ed64844d411745caa6a2778188e3ca96
│  │  │  └─ 8de13aa3d772c143ddb35323f8807ee5a931ee
│  │  ├─ fe
│  │  │  └─ 5108d8783b3949ab278dca79b29d07a8d7f85e
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-488f5b9eddaab3d6879a13e6b59b00fc46f6016c.idx
│  │     └─ pack-488f5b9eddaab3d6879a13e6b59b00fc46f6016c.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ README.md
├─ library
│  ├─ components
│  │  ├─ Input
│  │  │  ├─ index.tsx
│  │  │  └─ styles
│  │  │     ├─ index.less
│  │  │     └─ index.tsx
│  │  ├─ InputTag
│  │  │  ├─ index.tsx
│  │  │  └─ styles
│  │  │     ├─ index.less
│  │  │     └─ index.tsx
│  │  ├─ Tag
│  │  │  ├─ index.tsx
│  │  │  └─ styles
│  │  │     ├─ index.less
│  │  │     └─ index.tsx
│  │  ├─ hooks
│  │  │  └─ useControllableValue.ts
│  │  └─ index.tsx
│  ├─ es
│  │  ├─ Input
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ InputTag
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ Tag
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ hooks
│  │  │  ├─ useControllableValue.d.ts
│  │  │  └─ useControllableValue.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  └─ style
│  │     ├─ Input
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ InputTag
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ Tag
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ index.css
│  │     └─ index.min.css
│  ├─ gulpfile.js
│  ├─ lib
│  │  ├─ Input
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ InputTag
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ Tag
│  │  │  ├─ index.d.ts
│  │  │  └─ index.js
│  │  ├─ hooks
│  │  │  ├─ useControllableValue.d.ts
│  │  │  └─ useControllableValue.js
│  │  ├─ index.d.ts
│  │  ├─ index.js
│  │  └─ style
│  │     ├─ Input
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ InputTag
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ Tag
│  │     │  └─ styles
│  │     │     └─ index.css
│  │     ├─ index.css
│  │     └─ index.min.css
│  ├─ package.json
│  ├─ rollup
│  │  └─ esm
│  │     ├─ _virtual
│  │     │  ├─ _commonjsHelpers.js
│  │     │  ├─ _commonjsHelpers.js.map
│  │     │  ├─ _rollupPluginBabelHelpers.js
│  │     │  ├─ _rollupPluginBabelHelpers.js.map
│  │     │  ├─ index.js
│  │     │  ├─ index.js.map
│  │     │  ├─ index2.js
│  │     │  ├─ index2.js.map
│  │     │  ├─ react.development.js
│  │     │  ├─ react.development.js.map
│  │     │  ├─ react.production.min.js
│  │     │  └─ react.production.min.js.map
│  │     ├─ components
│  │     │  ├─ Input
│  │     │  │  ├─ index.d.ts
│  │     │  │  └─ styles
│  │     │  │     └─ index.d.ts
│  │     │  ├─ InputTag
│  │     │  │  ├─ index.d.ts
│  │     │  │  └─ styles
│  │     │  │     └─ index.d.ts
│  │     │  ├─ Tag
│  │     │  │  ├─ index.d.ts
│  │     │  │  └─ styles
│  │     │  │     └─ index.d.ts
│  │     │  └─ index.d.ts
│  │     ├─ hooks
│  │     │  └─ useControllableValue.d.ts
│  │     └─ library
│  │        ├─ components
│  │        │  ├─ Input
│  │        │  │  ├─ index.js
│  │        │  │  └─ index.js.map
│  │        │  ├─ InputTag
│  │        │  │  ├─ index.js
│  │        │  │  └─ index.js.map
│  │        │  ├─ Tag
│  │        │  │  ├─ index.js
│  │        │  │  └─ index.js.map
│  │        │  ├─ index.js
│  │        │  └─ index.js.map
│  │        └─ hooks
│  │           ├─ useControllableValue.js
│  │           └─ useControllableValue.js.map
│  ├─ rollup.config.mjs
│  ├─ tsconfig.json
│  └─ webpack.config.js
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ test
   ├─ .gitignore
   ├─ README.md
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ src
   │  ├─ App.tsx
   │  └─ index.tsx
   └─ tsconfig.json

```