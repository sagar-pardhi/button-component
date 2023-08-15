import addShoppinCart from "@/assets/outline_add_shopping_cart_white_24dp.png";

import { Button } from "@/components";

export const App = () => {
  return (
    <>
      <div className="flex mx-auto my-10 w-full h-screen">
        <div className="flex flex-col gap-y-10 px-10">
          <h1 className="text-2xl text-gray-800">Buttons</h1>
          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button />"}</p>
              <Button>Default</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"&:hover, &:focus"}</p>
              <Button>Default</Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button variant='outline' />"}</p>
              <Button variant="outline">Default</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"&:hover, &:focus"}</p>
              <Button variant="outline">Default</Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button variant='text' />"}</p>
              <Button variant="text">Default</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"&:hover, &:focus"}</p>
              <Button variant="text">Default</Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button disableShadow />"}</p>
              <Button disableShadow>Default</Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button disabled />"}</p>
              <Button disabled>Default</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button variant='text' disabled />"}</p>
              <Button variant="text" disabled>
                Default
              </Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button startIcon={cartIcon} />"}</p>
              <Button intent="primary" startIcon={addShoppinCart}>
                Default
              </Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button endIcon={cartIcon} />"}</p>
              <Button intent="primary" endIcon={addShoppinCart}>
                Default
              </Button>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button size='sm' />"}</p>
              <Button intent="primary" size="sm">
                Default
              </Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button size='md' />"}</p>
              <Button intent="primary" size="md">
                Default
              </Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button size='lg' />"}</p>
              <Button intent="primary" size="lg">
                Default
              </Button>
            </div>
          </div>

          <div className="flex gap-x-10 pb-10">
            <div className="flex flex-col gap-y-2">
              <p>{"<Button intent='default' />"}</p>
              <Button intent="default">Default</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button intent='primary' />"}</p>
              <Button intent="primary">Primary</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button intent='secondary' />"}</p>
              <Button intent="secondary">Secondary</Button>
            </div>

            <div className="flex flex-col gap-y-2">
              <p>{"<Button intent='danger' />"}</p>
              <Button intent="danger">Danger</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
