import { getGifs } from "../../helpers/getGifs"

jest.setTimeout(800000)

describe('Get gifs hook', () => {
   test('debe traer 10 elementos', async () => {
      const gif = await getGifs('One Piece')

      expect(gif.length).toBe(10)
   })

   test('should return an empty array if no category is passed',async () => {
    const gif = await getGifs('')
    expect(gif.length).toBe(0)
   })
   
    
})