<template>
  <div class="search-input" v-bind="$attrs" @click="focusInput">
    <SearchIcon class="search-input__search-icon" />
    <input
      ref="input"
      type="search"
      :value="value"
      :placeholder="placeholder"
      class="search-input__input"
      v-on="listeners"
    />
  </div>
</template>

<script>
import { ref, computed } from "@vue/composition-api"
import SearchIcon from "../icons/search.svg"
import { debounce } from "lodash-es"
export default {
  name: "SearchInput",
  components: {
    SearchIcon,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: null,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const input = ref(null)

    const onInput = (event) => {
      context.emit("input", event.target.value)
    }

    const listeners = computed(() => ({
      ...context.listeners,
      input: debounce(onInput, 250, { maxWait: 750 }),
    }))

    const focusInput = () => {
      input.value.focus()
    }

    return { input, listeners, focusInput }
  },
}
</script>
