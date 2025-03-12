const book = {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    yearPublished: 1925,
}
const {title, author} = book
process.stdout.write(title + " by " + author)