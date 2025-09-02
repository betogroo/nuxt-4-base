import { DemandListSchema, type DemandItem } from '~/schemas'

const fakeDemands: DemandItem[] = [
  {
    id: crypto.randomUUID(),
    rg: '12345678',
    name: 'João Silva',
    status: 'cadastrado',
  },
  {
    id: crypto.randomUUID(),
    rg: '87654321',
    name: 'Maria Oliveira',
    status: 'consultado',
  },
  {
    id: crypto.randomUUID(),
    rg: '45678912',
    name: 'Carlos Souza',
    status: 'liberado',
  },
  {
    id: crypto.randomUUID(),
    rg: '78912345',
    name: 'Ana Pereira',
    status: 'emitido',
  },
  {
    id: crypto.randomUUID(),
    rg: '23456789',
    name: 'Fernanda Costa',
    status: 'cadastrado',
  },
  {
    id: crypto.randomUUID(),
    rg: '56789123',
    name: 'Ricardo Almeida',
    status: 'consultado',
  },
  {
    id: crypto.randomUUID(),
    rg: '34567891',
    name: 'Beatriz Santos',
    status: 'liberado',
  },
  {
    id: crypto.randomUUID(),
    rg: '65432198',
    name: 'Paulo Rocha',
    status: 'emitido',
  },
]

const useIirgdDemand = () => {
  const demands = ref<DemandItem[]>([])
  const fetchDemands = async () => {
    const result = DemandListSchema.safeParse(fakeDemands)

    if (!result.success) {
      console.log(result.error)
      handleError(result.error)
      return
    }
    demands.value = result.data
  }
  return { demands, fetchDemands }
}

export default useIirgdDemand
