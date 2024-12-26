---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Emacs
---

- Alternatives
    - [[Emacs]] 29 supports `--init-directory`

- References
    - [plexus/chemacs2: Emacs version switcher, improved](https://github.com/plexus/chemacs2)

- Installation
    - If `$HOME` is set
        - `[ -f ~/.emacs ] && mv ~/.emacs ~/.emacs.bak`
        - `[ -d ~/.emacs.d ] && mv ~/.emacs.d ~/.emacs.default`
        - `git clone https://github.com/plexus/chemacs2.git ~/.emacs.d`
        - `~/.emacs-profiles.el`
            - `(("default" . ((user-emacs-directory . "~/.emacs.default"))))`
    - If `$Home` is not set
        - Use `$env:APPDATA` to replace `$HOME`
