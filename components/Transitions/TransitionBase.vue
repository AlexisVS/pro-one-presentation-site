<template>
  <div v-if="displayed" ref="observed" :style="transitions.default.initial">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type transitionKey = "appear" | "leave" | "initial";

type transitionType = {
  [key in transitionKey]: CSSProperties;
};

type transitionsObject = {
  default: transitionType;
  [key: string]: transitionType;
};

const props = defineProps({
  // Pre build-in transition name or custom transition object
  transition: {
    type: [String, Object] as PropType<string, transitionType>,
    default: "default",
    required: false,
  },
  // Animation is triggered only once
  once: {
    type: Boolean,
    default: false,
    required: false,
  },
  // Stay visible after the appears transition
  visibility: {
    type: Boolean,
    default: true,
    required: false,
  },
  // For disabling the transition when the element is out of the viewport
  leave: {
    type: Boolean,
    default: true,
    required: false,
  },
});

const displayed = ref(true);
const hasIntersected = ref(false);
const observed = ref<HTMLDivElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);
const transitions: transitionsObject = {
  default: {
    initial: {
      opacity: 0,
      transform: "translateY(100%)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    appear: {
      opacity: 1,
      transform: "translateY(0)",
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
    leave: {
      transform: "translateY(-100%)",
      opacity: 0,
      "transition-duration": "2000ms",
      transitionProperty: "opacity transform",
    },
  },
  fade: {
    initial: {
      opacity: 0,
    },
    appear: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  },
  slideRight: {
    initial: {
      transform: "translateX(-100%)",
    },
    appear: {
      transform: "translateX(0)",
    },
    leave: {
      transform: "translateX(100%)",
    },
  },
  // Add more transitions here...
};

const getTransition = (): transitionType => {
  if (typeof props.transition === "string") {
    const transitionName = props.transition as string;

    if (transitionName in transitions) {
      return transitions[transitionName];
    } else {
      throw new Error(`Invalid transition name: ${transitionName}`);
    }
  } else {
    const transition = props.transition as transitionType;

    // Verify if all keys of the object are of type 'transitionKey'
    for (const key in transition) {
      if (!(key in transitions)) {
        throw new Error(`Invalid transitionType object for key: ${key}`);
      }
    }
    return transition;
  }
};

const applyTransitionStyle = (
  transitionKey: transitionKey,
  element: Element,
): void => {
  Object.entries(getTransition()[transitionKey]).forEach(([key, value]) => {
    element.style[key] = value;
  });
};

const handleInIntersection = (element: HTMLElement) => {
  applyTransitionStyle("appear", element);
};

const handleOutIntersection = (element: HTMLElement) => {
  applyTransitionStyle("leave", element);
};

const getTransitionDurationNumber = (transitionKey: transitionKey): number => {
  const transition = getTransition()[transitionKey];
  const transitionDuration = transition["transition-duration"] as string;
  return parseInt(transitionDuration.substring(-2));
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]): void => {
      // has already handleIntersection once
      if (props.once && hasIntersected.value) return;

      const element = entry.target as HTMLElement;

      // intersected
      if (entry && entry.isIntersecting) {
        handleInIntersection(element);

        setTimeout(() => {
          hasIntersected.value = true;

          if (!props.visibility && props.once) {
            observer.value?.unobserve(element);

            if (props.leave) {
              handleOutIntersection(element);
            } else {
              displayed.value = false;
            }
          }
        }, getTransitionDurationNumber("appear"));
      } else if (entry && !entry.isIntersecting && props.visibility === false) {
        if (props.leave) {
          handleOutIntersection(element);
        } else {
          displayed.value = false;
        }
      }
    },
    { threshold: 1 },
  );

  observer.observe(observed.value);
  observer.value = observer;
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>
<!--<template>-->
<!--  <div-->
<!--    ref="observedElement"-->
<!--    :key="`transition-intersected-${isIntersected ? 'true' : 'false'}`"-->
<!--    :style="getTransitionType('initial')"-->
<!--  >-->
<!--    &lt;!&ndash; Your content goes here &ndash;&gt;-->
<!--    <slot></slot>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { CSSProperties, ref, StyleValue } from "vue";-->
<!--import { onIntersect } from "../../composables/IntersectionObserver";-->

<!--type TransitionType = "appear" | "leave" | "initial";-->

<!--type TransitionObject = {-->
<!--  [key in TransitionType]: CSSProperties;-->
<!--};-->

<!--type TransitionsObject = {-->
<!--  default: TransitionObject;-->
<!--  [key: string]: TransitionObject;-->
<!--};-->

<!--const observer = ref<IntersectionObserver | null>(null);-->
<!--const observedElement = ref<HTMLDivElement | null>(null);-->
<!--const hasIntersectedOnce = ref(false);-->
<!--const shouldUseLeave = ref(false);-->
<!--const isIntersected = ref(false);-->
<!--const props = defineProps({-->
<!--  transitionProps: {-->
<!--    type: [String, Object] as PropType<string | TransitionObject>,-->
<!--    default: "default",-->
<!--  },-->
<!--  animateOnLeave: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--    required: false,-->
<!--  },-->
<!--  once: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--    required: false,-->
<!--  },-->
<!--  visibility: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--    required: false,-->
<!--  },-->
<!--  threshold: {-->
<!--    type: Number,-->
<!--    default: 1,-->
<!--    required: false,-->
<!--  },-->
<!--});-->
<!--const transitions: TransitionsObject = {-->
<!--  default: {-->
<!--    initial: {-->
<!--      opacity: 0,-->
<!--      transform: "translateY(-100%)",-->
<!--      "transition-duration": "2000ms",-->
<!--      transitionProperty: "opacity transform",-->
<!--    },-->
<!--    appear: {-->
<!--      opacity: 1,-->
<!--      transform: "translateY(0)",-->
<!--      "transition-duration": "2000ms",-->
<!--      transitionProperty: "opacity transform",-->
<!--    },-->
<!--    leave: {-->
<!--      opacity: 0,-->
<!--      "transition-duration": "2000ms",-->
<!--      transitionProperty: "opacity transform",-->
<!--    },-->
<!--  },-->
<!--  fade: {-->
<!--    initial: {-->
<!--      opacity: 0,-->
<!--    },-->
<!--    appear: {-->
<!--      opacity: 1,-->
<!--    },-->
<!--    leave: {-->
<!--      opacity: 0,-->
<!--    },-->
<!--  },-->
<!--  slideRight: {-->
<!--    initial: {-->
<!--      transform: "translateX(-100%)",-->
<!--    },-->
<!--    appear: {-->
<!--      transform: "translateX(0)",-->
<!--    },-->
<!--    leave: {-->
<!--      transform: "translateX(100%)",-->
<!--    },-->
<!--  },-->
<!--  // Add more transitions here...-->
<!--};-->

<!--const getTransition = computed((): TransitionObject => {-->
<!--  // if transitionProps is a string,try to use it as a key to get the transitionsObject if false return transitions.default-->
<!--  if (-->
<!--    typeof props.transitionProps === "string" &&-->
<!--    typeof transitions[props.transitionProps] === "object"-->
<!--  ) {-->
<!--    return transitions[props.transitionProps];-->
<!--  }-->

<!--  // if transitionProps is an object and is the same type of TransitionObject, use it as the transitionObject-->
<!--  if (-->
<!--    typeof props.transitionProps === "object" &&-->
<!--    typeof props.transitionProps.initial === "object" &&-->
<!--    typeof props.transitionProps.appear === "object"-->
<!--  ) {-->
<!--    return props.transitionProps;-->
<!--  }-->
<!--  return transitions.default;-->
<!--});-->

<!--const getTransitionType = (type: TransitionType): StyleValue =>-->
<!--  getTransition.value[type];-->

<!--const setCSSProperties = (element: HTMLElement, type: TransitionType) => {-->
<!--  Object.entries(getTransitionType(type)).forEach(([key, value]) => {-->
<!--    element.style[key as string] = value;-->
<!--  });-->
<!--};-->

<!--const intersectionCallback = (target: Element) => {-->
<!--  console.log("intersectionCallback", target, getTransitionType("appear"));-->
<!--  const element = target as HTMLElement;-->
<!--  isIntersected.value = true;-->
<!--  if (props.once && hasIntersectedOnce.value) return;-->

<!--  if (props.once) {-->
<!--    hasIntersectedOnce.value = true;-->
<!--    observer.value?.unobserve(element);-->
<!--  }-->

<!--  setCSSProperties(element, "appear");-->
<!--};-->
<!--const intersectionOutCallback = (target: Element) => {-->
<!--  if (props.visibility) return;-->

<!--  const element = target as HTMLElement;-->
<!--  console.log("intersectionOutCallback", element, getTransitionType("leave"));-->
<!--  isIntersected.value = false;-->

<!--  if (shouldUseLeave.value) {-->
<!--    setCSSProperties(element, "leave");-->

<!--    const timeout = parseInt(-->
<!--      getTransitionType("leave").transitionDuration.replace("ms", ""),-->
<!--    );-->
<!--    setTimeout(() => {-->
<!--      setCSSProperties(element, "initial");-->
<!--    }, timeout);-->
<!--  } else {-->
<!--    setCSSProperties(element, "initial");-->
<!--  }-->
<!--};-->
<!--onMounted(() => {-->
<!--  const options: IntersectionObserverInit = {-->
<!--    // root: document.body,-->
<!--    rootMargin: "0px",-->
<!--    threshold: props.threshold,-->
<!--  };-->

<!--  const element = observedElement.value as HTMLElement;-->

<!--  observer.value = onIntersect(-->
<!--    element,-->
<!--    intersectionCallback,-->
<!--    intersectionOutCallback,-->
<!--    props.once,-->
<!--    options,-->
<!--  );-->
<!--});-->

<!--// When the component is removed, disconnect the observer (clean-up step)-->
<!--onUnmounted(() => {-->
<!--  observer.value?.disconnect();-->
<!--});-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--/* Add your custom styles here if needed */-->
<!--</style>-->
