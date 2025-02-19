<template>
  <va-card
    class="va-file-upload-list-item"
    :class="{'file-upload-list-item--undo': removed}"
    :stripe="removed && undo"
    :stripeColor="color"
    no-margin
    no-padding
  >
    <va-file-upload-undo
      v-if="removed && undo"
      @recover="recoverFile"
    />
    <div
      v-else
      class="va-file-upload-list-item__content"
    >
      <div class="va-file-upload-list-item__name">
        {{ file && file.name }}
      </div>
      <div class="va-file-upload-list-item__size">
        {{ file && file.size }}
      </div>
      <va-icon
        class="va-file-upload-list-item__delete"
        name="clear"
        role="button"
        aria-hidden="false"
        aria-label="remove file"
        tabindex="0"
        color="danger"
        @click="removeFile"
        @keydown.enter.stop="removeFile"
        @keydown.space.stop="removeFile"
      />
    </div>
  </va-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { ConvertedFile } from '../types'

import { VaCard } from '../../va-card'
import { VaIcon } from '../../va-icon'
import { VaFileUploadUndo } from '../VaFileUploadUndo'

export default defineComponent({
  name: 'VaFileUploadListItem',
  components: {
    VaIcon,
    VaCard,
    VaFileUploadUndo,
  },
  emits: ['remove'],
  props: {
    file: { type: Object as PropType<ConvertedFile | null>, default: null },
    color: { type: String, default: 'success' },
    undo: { type: Boolean, default: false },
    undoDuration: { type: Number, default: 3000 },
  },
  setup (props, { emit }) {
    const removed = ref(false)

    const removeFile = () => {
      if (props.undo) {
        removed.value = true

        setTimeout(() => {
          if (removed.value) {
            emit('remove')
            removed.value = false
          }
        }, props.undoDuration)
      } else {
        emit('remove')
        removed.value = false
      }
    }

    const recoverFile = () => { removed.value = false }

    return {
      removed,
      removeFile,
      recoverFile,
    }
  },
})
</script>

<style lang='scss'>
@import "../../../styles/resources";
@import "variables";

.va-file-upload-list-item {
  & + & {
    margin-top: 0.5rem;
  }

  line-height: 1.5rem;
  width: 100%;
  max-width: 100%;
  padding: 1.125rem 0.5rem 1rem 1rem;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__name {
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-basis: 60%;
    overflow: hidden;
  }

  &__size {
    color: var(--va-file-upload-list-item-size-text-color);
  }

  &__delete {
    font-size: 1.5rem;
    cursor: pointer;

    &:focus {
      @include focus-outline;
    }
  }

  &--undo {
    background: none;
    box-shadow: none;
  }
}
</style>
