export default {
  data() {
    return {
      text: 'Sample Text',
    };
  },
  computed: {
    reversedText() {
      console.log('reversedText called');
      return this.text.split('').reverse().join('');
    },
    countedWords() {
      console.log('countedWords called');
      return `${this.text} (${this.text.length})`;
    },
  },
};
