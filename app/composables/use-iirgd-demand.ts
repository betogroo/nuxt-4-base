import { DemandListSchema, type DemandItem } from '~/schemas'

const fakeDemands = [
  {
    id: '7dfa8c61-1158-4b76-b48f-a518c29ca041',
    name: 'João Silva',
    rg: '12345678',
    status: 'cadastrado',
  },
  {
    id: 'c0e36ebf-db90-4ec6-998c-dab8baec5658',
    name: 'Maria Oliveira',
    rg: '87654321',
    status: 'consultado',
  },
  {
    id: '9906c5b5-e718-41fb-8a84-7ad08e34e35b',
    name: 'Carlos Souza',
    rg: '45678912',
    status: 'liberado',
  },
  {
    id: '1df72b36-b342-4bdc-a673-467deb172b39',
    name: 'Ana Pereira',
    rg: '78912345',
    status: 'emitido',
  },
  {
    id: '2562094f-dd59-43a4-b8a7-a462f855e9ea',
    name: 'Fernanda Costa',
    rg: '23456789',
    status: 'cadastrado',
  },
  {
    id: 'ad9ec788-3ed2-42ef-9f1c-44034facfb29',
    name: 'Ricardo Almeida',
    rg: '56789123',
    status: 'consultado',
  },
  {
    id: 'b7cc40c4-d1a2-4e9d-a2aa-5b1bc7d90321',
    name: 'Beatriz Santos',
    rg: '34567891',
    status: 'liberado',
  },
  {
    id: '30774a93-5913-480c-86e5-6fe0e655857f',
    name: 'Paulo Rocha',
    rg: '65432198',
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

  const addDemand = (demand: DemandItem) => {
    demands.value.push(demand)
  }
  return { demands, fetchDemands, addDemand }
}

export default useIirgdDemand
