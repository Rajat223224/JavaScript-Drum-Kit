body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: sans-serif;
}

.keys {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 0 auto;
}

.key {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.1s;
}

.key:hover {
  transform: scale(1
