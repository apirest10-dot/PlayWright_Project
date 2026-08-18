# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NonSelect.spec.ts >> Handling non select listbox
- Location: tests\NonSelect.spec.ts:2:5

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - generic [ref=e7]: Cargando
        - progressbar [ref=e8]
      - main [ref=e15]:
        - generic [ref=e16]:
          - img [ref=e19]
          - generic [ref=e20]:
            - heading "Inicia sesión" [level=1] [ref=e21]
            - generic [ref=e22]: Ir a Gmail
        - generic [ref=e25]:
          - generic [ref=e30]:
            - generic [ref=e35]:
              - textbox "Correo electrónico ou teléfono" [active] [ref=e36]
              - generic: Correo electrónico ou teléfono
            - button "Esqueciches o correo electrónico?" [ref=e40] [cursor=pointer]
          - generic [ref=e43]:
            - text: Non é o teu ordenador? Utiliza o modo de convidado para iniciar sesión de forma privada.
            - link "Máis información sobre o uso do modo de convidado (ligazón externa; ábrese nunha ventá nova)" [ref=e44] [cursor=pointer]:
              - /url: https://support.google.com/chrome/answer/6130773?hl=gl
              - text: Máis información sobre o uso do modo de convidado
        - generic [ref=e46]:
          - button "Seguinte" [ref=e50]:
            - generic [ref=e53]: Seguinte
          - button "Crear conta" [ref=e59]:
            - generic [ref=e62]: Crear conta
    - contentinfo [ref=e66]:
      - combobox "Cambiar idioma galego" [ref=e70] [cursor=pointer]:
        - generic:
          - generic: galego
        - generic:
          - img
      - list [ref=e72]:
        - listitem [ref=e73]:
          - link "Abrir o Centro de axuda para contas de Google (ligazón externa; ábrese nunha ventá nova)" [ref=e74] [cursor=pointer]:
            - /url: https://support.google.com/accounts?hl=gl&p=account_iph
            - text: Axuda
        - listitem [ref=e75]:
          - link "Política de privacidade (ligazón externa; ábrese nunha ventá nova)" [ref=e76] [cursor=pointer]:
            - /url: https://accounts.google.com/TOS?loc=IN&hl=gl&privacy=true
            - text: Privacidade
        - listitem [ref=e77]:
          - link "Condicións de servizo de Google (ligazón externa; ábrese nunha ventá nova)" [ref=e78] [cursor=pointer]:
            - /url: https://accounts.google.com/TOS?loc=IN&hl=gl
            - text: Condicións
  - iframe [ref=e79]:
    
```