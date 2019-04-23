<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal-content"
                 role="dialog"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription">
                <header class="modal-header">
                    <h2 id="modalTitle">
                        <slot name="headerText">
                            Dialog
                        </slot>
                        <button type="button"
                                class="btn-close pull-right"
                                aria-label="Lukk modal"
                                tabindex="0"
                                autofocus
                                @keyup.esc="close"
                                @click="close">x</button>
                    </h2>
                </header>
                <section class="modal-body" id="modalDescription">
                    <slot name="body"></slot>
                </section>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button type="button"
                                class="btn ok-btn ok-btn-success"
                                role="button"
                                tabindex="0"
                                @click="confirm"
                                aria-label="Bekreft modal">
                            {{ $t('modal.confirm') }}
                        </button>
                        <button type="button"
                                class="btn ok-btn ok-btn-primary"
                                role="button"
                                tabindex="0"
                                @click="close"
                                aria-label="Lukk modal">
                            {{ $t('modal.decline') }}
                        </button>
                    </slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    },
  },
};
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        width: 70%;
        max-width: max-content;
        height: min-content;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
        width: 100%;
    }

    .modal-header {
        padding-bottom: 0;
        border-bottom: 1px solid #eeeeee;
    }

    #modalTitle {
        width: 100%;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        align-self: flex-end;
        margin-left: auto;
        border: none;
        font-size: 20px;
        padding-left: 30px;
        cursor: pointer;
        font-weight: bold;
        background: transparent;
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.5s ease;
    }
</style>
