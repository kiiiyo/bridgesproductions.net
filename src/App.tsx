import { Header } from './components/header'

export const App = () => {
  return (
    <>
      <Header />
      <main class="h-full mt-11 md:mt-14">
        <div class="flex justify-center h-96 items-center">
          <div class="text-center">
            <div class="text-8xl">🚧</div>
            <div class="text-xl text-white mt-4 font-bold">WIP</div>
          </div>
        </div>
      </main>
    </>
  )
}
