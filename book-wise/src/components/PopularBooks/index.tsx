import { BookCard, BookWithAvgRating } from "../BookCard"
import { Link } from "../ui/Link"
import { Text } from "../Typography"
import { Container } from "./styles"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(["popular-books"], async () => {
    const { data } = await api.get("/books/popular");
    return data?.books ?? []
  })

  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {popularBooks?.map(book => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </Container>
  )
}