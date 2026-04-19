# Pruma.ia Landing Skill Stack

## Current bottleneck

A fundacao estrategica esta resolvida, mas a execucao ainda depende de uma linguagem de landing relativamente generica.
O principal gargalo nao e copy, nem stack tecnico, nem falta de secoes.
O gargalo e este:

- a hierarquia visual ainda e correta, mas previsivel
- o hero ainda flerta com repertorio de SaaS clean demais
- ha repeticao de blocos em grade que enfraquece singularidade
- a prova de valor ainda esta mais "declarada" do que "encenada" na interface
- o CTA secundario de negocio nao entrou na experiencia

Traducao pratica:
precisamos de um stack que aumente gosto, composicao, coerencia visual e qualidade de componentes antes de pensar em animacao avancada ou 3D.

## Active skill stack

### 1. `landing-page-visual-direction`

Funcao:
coletar referencias externas, arbitrar conflitos de gosto e transformar inspiracao em decisoes de layout, tipografia, fundos, ritmo e superficies.

Por que entra agora:
o proximo risco real e iterar "no escuro" e cair em refinamento cosmetico sem linguagem visual forte.

### 2. `design-taste-frontend`

Funcao:
impor criterios anti-slop na traducao da direcao visual para web real: hierarquia, tipografia, assimetria, ritmo, anti-card-overuse e consistencia material.

Por que entra agora:
a landing ja tem boa mensagem, mas ainda precisa endurecer composicao e fugir de solucoes que um modelo gera por padrao.

### 3. `landing-page-component-curation`

Funcao:
selecionar ou reconstruir poucos componentes de alto impacto para substituir trechos ainda comuns demais, especialmente hero, prova, CTA e formulario.

Por que entra agora:
os pontos fracos da landing nao pedem refatoracao total; pedem cirurgia em modulos especificos.

## Execution order

1. `landing-page-visual-direction`

Objetivo:
fechar uma direcao visual unica a partir de referencias reais.

Entrega esperada:
um direction sheet com mood, postura tipografica, logica de paleta, tratamento de superficie, comportamento de layout e motion stance.

2. `design-taste-frontend`

Objetivo:
transformar a direcao visual em regras concretas de implementacao.

Entrega esperada:
decisoes objetivas sobre estrutura do hero, densidade, alinhamento, escala tipografica, uso do ciano, tratamento de secoes e reducao de cards genericos.

3. `landing-page-component-curation`

Objetivo:
elevar os modulos mais expostos da landing sem reconstruir tudo.

Entrega esperada:
uma lista curta de componentes a substituir ou reinterpretar com criterio.

4. Implementacao no codigo atual

Objetivo:
aplicar as decisoes no HTML/CSS/JS existente, mantendo a stack vanilla por enquanto.

## Review rubric

Cada iteracao daqui para frente deve ser avaliada por estas seis lentes.

### `Clarity`

Pergunta:
em 5 a 8 segundos o visitante entende dor, oferta, publico e proximo passo?

Estado atual:
4/5

Leitura:
a proposta e clara e o CTA principal aparece cedo, mas o CTA secundario ainda nao reforca um caminho de negocio.

### `Hierarchy`

Pergunta:
o olho percorre a pagina com tensao, contraste e priorizacao claras?

Estado atual:
3/5

Leitura:
a leitura e organizada, mas varios blocos usam uma logica visual parecida e isso achata a progressao.

### `Distinctiveness`

Pergunta:
alguem bateria o olho e reconheceria que isso nao pertence a qualquer SaaS de automacao?

Estado atual:
2/5

Leitura:
as cores e a copy ajudam, mas a linguagem de componentes ainda nao e memoravel o bastante.

### `Cohesion`

Pergunta:
as secoes parecem partes do mesmo sistema de marca?

Estado atual:
4/5

Leitura:
ha boa consistencia de paleta, forma e narrativa.
O problema nao e incoerencia; e falta de assinatura visual mais forte.

### `Interaction`

Pergunta:
estados, movimentos e affordances melhoram entendimento ou resposta?

Estado atual:
2/5

Leitura:
quase toda a pagina ainda se comporta como composicao estatica.
Isso nao e um erro nesta fase, mas limita a percepcao de refinamento.

### `Conversion`

Pergunta:
o CTA parece inevitavel e bem sustentado pela pagina?

Estado atual:
3/5

Leitura:
o CTA principal esta certo, mas a prova ainda precisa sustentar melhor o momento de decisao.

## Reasons for excluded skills

### `landing-page-structural-teardown`

Fica de fora por enquanto porque ainda nao temos uma referencia especifica para dissecar tecnicamente.
Antes disso, precisamos decidir qual linguagem visual estamos perseguindo.

### `landing-page-live-canvas`

Fica de fora por enquanto porque ainda nao estamos refinando em ferramenta visual externa nem fazendo pixel-polish bidirecional.
Trazer isso agora adicionaria processo sem resolver o gargalo principal.

### `landing-page-immersive-architecture`

Fica de fora por enquanto porque 3D, WebGL ou motion mais ambicioso seriam prematuros.
A pagina ainda nao extraiu todo o valor possivel de composicao, prova e direcao visual 2D.

## Decision

O stack minimo para a proxima passada e:

- `landing-page-visual-direction`
- `design-taste-frontend`
- `landing-page-component-curation`

O proximo passo obvio e entrar na skill 3 com referencias reais.
Sem isso, qualquer redesign correra o risco de apenas reorganizar a mesma pagina com acabamento melhor.
