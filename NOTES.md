FROM https://github.com/quil/quil/wiki/Functional-mode-(fun-mode)

| Name | Fn |
| ---- | -- |
| setup | `(fn []) -> initial-state` |
| update | `(fn [state]) -> new-state` |
| draw | `(fn [state])` |
| focus-gained | '(fn [state]) -> new-state'|
| focus-lost | `(fn [state]) -> new-state` |
| key-pressed | `(fn [state event]) -> new-state`|


E.g.

```
{
 :key :c      ; might be nil, see quil.core/key-as-keyword
 :key-code 67 ; see quil.core/key-code
 :raw-key \c  ; see quil.core/raw-key
}
```
