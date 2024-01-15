import { ref } from 'vue';

const sharedState = {
    data: ref({}),
    loading: ref(true),
    error: ref(null),
};

export default sharedState;