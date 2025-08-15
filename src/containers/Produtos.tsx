import { useGetProdutosQuery } from '../services/api'
import ProdutoItem from '../components/Produto'
import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  if (isLoading) {
    return <h2>Carregando</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((p) => (
          <ProdutoItem produto={p} key={p.id} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
