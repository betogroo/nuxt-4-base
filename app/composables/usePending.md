# 📌 usePending Composable

Gerencia estados de "pendência" (loading) em toda a aplicação.
Útil para saber quando uma ação assíncrona está em execução, de forma global ou por item.

---

## ✅ Schema

O estado é validado com **Zod**, garantindo que só existam **dois estados possíveis**:

- **Idle** (sem operação pendente)
- **Loading** (ação em progresso, com identificador de ação e item opcional)

```ts
type PendingState = { loading: false } | { loading: true; action: string; item?: string }
```

---

## 🛠 API

### `pendingState`

Estado global persistido via `useState` (Nuxt).
Sempre será **compartilhado em toda a aplicação**.

```ts
const { pendingState } = usePending()
console.log(pendingState.value)
// { loading: false }
```

---

### `startPending(action: string, item?: string)`

Inicia um estado de pendência.

```ts
startPending('deleteTodo', todo.id)
```

- `action` → string que descreve a operação (`"addTodo"`, `"deleteTodo"`, `"toggleIsDone"`, etc.)
- `item` (opcional) → identifica o item da lista afetado

---

### `stopPending()`

Reseta o estado de pendência para idle.

```ts
stopPending()
```

---

### `isPending(action: string, item?: string | number): boolean`

Verifica se determinada ação/item está em estado pendente.
Muito útil para **bindings de `:loading` em botões**.

```vue
<v-btn :loading="isPending('deleteTodo', todo.id)">
  Deletar
</v-btn>
```

---

## 📦 Exemplos de uso

### 1. Dentro de um componente (uso direto da função)

```vue
<v-btn icon="mdi-check" :loading="isPending('toggleIsDone', item.id)" @click="toggle(item.id)" />
```

---

### 2. Passando a função para um componente filho

```vue
<TodoItem :item="todo" :is-pending="isPending" @delete-item="handleDelete" />
```

No filho:

```ts
interface Props {
  item: TaskRow
  isPending?: (action: string, item?: string) => boolean
}

const { item, isPending = () => false } = defineProps<Props>()
```

```vue
<v-btn
  icon="mdi-trash"
  :loading="isPending('deleteTodo', item.id)"
  @click="$emit('delete-item', item.id)"
/>
```

---

## 🔑 Benefícios

- Centraliza o controle de loading em **um único lugar**
- Funciona tanto para **ações globais** (ex: botão salvar formulário)
  quanto para **ações por item** (ex: excluir uma linha da lista)
- Tipagem validada por **Zod** → evita estados inválidos
- Flexível → pode ser usado direto ou repassado como prop

---
