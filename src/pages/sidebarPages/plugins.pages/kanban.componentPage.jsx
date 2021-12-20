import React, { Component, Fragment } from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
  Button,
  Tag,
  Progress,
  Modal,
  Form,
  Input,
  Anchor,
  Divider,
} from "antd";

import {
  PlusOutlined,
  PaperClipOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import profilavatar from "../../../Images/face-1.jpg";
import convesionImg from "../../../Images/face-3.jpg";
import convesionImg2 from "../../../Images/face-4.jpg";
import convesionImg3 from "../../../Images/face-5.jpeg";
import officedark from "../../../Images/office-dark.jpg";
import meeting from "../../../Images/meeting.jpg";
import home from "../../../Images/home-decor-1.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyClipboard from "../../../utils/copyClipboard";
import AlertOnClick from "../../../utils/alertOnClick";
const { Link } = Anchor;
const code = `


ReactDOM.render(
  <>
  <div class="kanban-page mb-24">

  <!-- Kanban App component -->
  <KanbanApp></KanbanApp>
  <!-- / Kanban App component -->

</div>
  </>,
  mountNode,
);`;

const markdown = `

~~~jsx
${code}
~~~
`;
const { TextArea } = Input;
export class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: "",
      kanbanList: [],
      isAddingKanban: false,
      newKanbanTitle: "",
      newKanbanTitleError: false,
      isAddingNewTask: "",
      textDescription: "",
      alert: false,
    };
  }

  componentDidMount() {
    this.setState({
      kanbanList: [
        {
          title: "Backlog",
          extra: [this.addButton("Backlog")],
          children: [
            {
              type: "text",
              content: "Click me to change Title",
            },
            {
              type: "text",
              content: "Drag me to 'In progress' section",
            },
            {
              type: "img",
              content:
                "Website Design: New cards for blog section and profile details",
              img: officedark,
              tag: "PENDING",
              attachment: 11,
              peopleImg: [profilavatar, convesionImg, convesionImg2],
            },
          ],
        },
        {
          title: "In progress",
          extra: [this.addButton("In progress")],
          children: [
            {
              type: "paragraph",
              content: "Fix Firefox errors",
              attachment: 11,
              tag: "ERRORS",
              peopleImg: [profilavatar, convesionImg],
            },
            {
              type: "paragraph",
              content: "Argon Dashboard PRO - Angular 11",
              attachment: 3,
              tag: "UPDATS",
              peopleImg: [profilavatar, convesionImg],
            },
            {
              type: "img",
              content: "Vue 3 Updates",
              img: meeting,
              tag: "UPDATES",
              attachment: 9,
              peopleImg: [profilavatar, convesionImg, convesionImg2],
            },
          ],
        },
        {
          title: "In review",
          extra: [this.addButton("In review")],
          children: [
            {
              type: "paragraph",
              content: "Responsive Changes",
              attachment: 11,
              tag: "IN TESTING",
              peopleImg: [profilavatar, convesionImg],
            },
            {
              type: "progress",
              content: "Change images dimension",
              progress: 80,
              tag: "IN REVIEW",
              strokeColor: "#52c41a",
              peopleImg: [profilavatar],
            },
            {
              type: "progress",
              content: "Update Links",
              progress: 80,
              attachment: 6,
              tag: "IN REVIEW",
              strokeColor: "#52c41a",
              peopleImg: [profilavatar, convesionImg],
            },
          ],
        },
        {
          title: "Done",
          extra: [this.addButton("Done")],
          children: [
            {
              type: "img",
              content: "Redesign for the home page",
              img: home,
              tag: "Done",
              attachment: 3,
              peopleImg: [profilavatar, convesionImg, convesionImg2],
            },
            {
              type: "paragraph",
              content: "Schedule winter campaign",
              attachment: 6,
              tag: "Done",
              peopleImg: [profilavatar, convesionImg],
            },
          ],
        },
      ],
    });
  }

  addButton = (title) => {
    return (
      <Button
        className="px-30"
        size="small"
        onClick={() => this.enableAddingNewTask(title)}
      >
        <PlusOutlined />
      </Button>
    );
  };

  enableAddingNewTask = (title) => {
    this.setState({ isAddingNewTask: title });
  };

  addNewTask = (index) => {
    const newTask = {
      type: "text",
      content: this.state.textDescription,
    };
    const newKanbanList = [...this.state.kanbanList];
    newKanbanList[index].children = [...newKanbanList[index].children, newTask];
    this.setState({
      kanbanList: newKanbanList,
      textDescription: "",
      isAddingNewTask: "",
    });
  };
  cancelAddingNewTask = () => {
    this.setState({ isAddingNewTask: "" });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleAddKanban = () => {
    this.setState({ isAddingKanban: !this.state.isAddingKanban });
  };
  handleNewKanban = () => {
    this.setState({ newKanbanTitleError: false });
    if (!this.state.newKanbanTitle) {
      this.setState({ newKanbanTitleError: true });
      return;
    }
    const newKanban = {
      title: this.state.newKanbanTitle,
      extra: [this.addButton(this.state.newKanbanTitle)],
      children: [],
    };
    this.setState({
      isAddingKanban: false,
      kanbanList: [...this.state.kanbanList, newKanban],
      newKanbanTitle: "",
    });
  };

  handleCancelAddKanban = () => {
    this.setState({ isAddingKanban: false, newKanbanTitleError: false });
  };

  renderKanbanType = (type, details, title) => {
    switch (type) {
      case "text":
        return (
          <Card
            className="kanban-card mb-24"
            bordered={false}
            onClick={this.showModal}
          >
            <h6 className="font-regular text-md mb-0">{details.content}</h6>
          </Card>
        );
      case "img":
        return (
          <Card
            className="kanban-card mb-24"
            bordered={false}
            onClick={this.showModal}
          >
            <img src={details.img} alt="" className="mb-15" />
            <Tag color="#f50" className="mb-15">
              {details.tag}
            </Tag>
            <p>{details.content}</p>
            <Row>
              <Col>
                <div>
                  <PaperClipOutlined /> {details.attachment}
                </div>
              </Col>
              <Col className="ml-auto">
                <Avatar.Group className="avatar-chips">
                  {details.peopleImg?.map((people, idx) => (
                    <Avatar size={24} src={people} key={idx} />
                  ))}
                </Avatar.Group>
              </Col>
            </Row>
          </Card>
        );
      case "paragraph":
        return (
          <Card
            className="kanban-card mb-24"
            bordered={false}
            onClick={this.showModal}
          >
            <Tag className="mb-15 bg-warning text-dark">{details.tag}</Tag>
            <p>{details.content}</p>
            <Row>
              <Col>
                <div>
                  <PaperClipOutlined /> {details.attachment}
                </div>
              </Col>
              <Col className="ml-auto">
                <Avatar.Group className="avatar-chips">
                  {details.peopleImg?.map((people, idx) => (
                    <Avatar size={24} src={people} key={idx} />
                  ))}
                </Avatar.Group>
              </Col>
            </Row>
          </Card>
        );
      case "progress":
        return (
          <Card
            className="kanban-card mb-24"
            bordered={false}
            onClick={this.showModal}
          >
            <Tag className="mb-15" color="#87d068">
              {details.tag}
            </Tag>
            <p>{details.content}</p>
            <Progress
              percent={details.progress}
              showInfo={false}
              strokeColor={details.strokeColor}
            />
            <Row>
              {details.attachment ? (
                <Col>
                  <div>
                    <PaperClipOutlined /> {details.attachment}
                  </div>
                </Col>
              ) : (
                ""
              )}
              <Col className="ml-auto">
                <Avatar.Group className="avatar-chips">
                  {details.peopleImg?.map((people, idx) => (
                    <Avatar size={24} src={people} key={idx} />
                  ))}
                </Avatar.Group>
              </Col>
            </Row>
          </Card>
        );
      default:
        return "";
    }
  };

  handleOnDragEnd = (e) => {
    if (!e.destination) return;
    const dragedFrom = Number(e.source.droppableId);
    const sourceIdx = e.source.index;
    const droppedTo = Number(e.destination.droppableId);
    const destinationIdx = e.destination.index;
    const destinationItem = [...this.state.kanbanList[droppedTo].children];
    const sourceItems = [...this.state.kanbanList[dragedFrom].children];
    const [sourceElement] = sourceItems.splice(sourceIdx, 1);
    destinationItem.splice(destinationIdx, 0, sourceElement);
    const newKanbanList = [...this.state.kanbanList];
    newKanbanList[droppedTo].children = destinationItem;
    newKanbanList[dragedFrom].children = sourceItems;
    this.setState({ kanbanList: newKanbanList });
  };

  render() {
    const { visible, isAddingKanban } = this.state;
    return (
      <>
        <div className="main-content">
          <AlertOnClick state={this.state.alert} />
          <div className="page-row">
            <div className="page-content" id="Basic">
              <section className="mb-24">
                <h1>Kanban</h1>
                <p className="text-dark">Kanban boards using vuedraggable.</p>
              </section>
              <div className="ant-divider ant-divider-horizontal"></div>
              <h2>Examples</h2>
              <Divider orientation="left">Basic</Divider>
              <div className="kanban-page mb-24">
                {/* <div className="calendar-head my-15">
                  <div className="ml-auto">
                    <h6 className="text-sm text-muted font-bold">
                      Team members :
                    </h6>
                    <Avatar.Group className="avatar-chips">
                      <Avatar size="large" src={profilavatar} />
                      <Avatar size="large" src={convesionImg} />
                      <Avatar size="large" src={convesionImg2} />
                      <Avatar size="large" src={convesionImg3} />
                    </Avatar.Group>
                  </div>
                  <div>
                    <Button type="primary" onClick={this.handleAddKanban}>
                      <PlusOutlined style={{ marginRight: "0px" }} />
                    </Button>
                  </div>
                </div> */}
                <Card style={{ boxShadow: "none" }}>
                  <div id="kanban" className="kanban">
                    <div className="kanban-boards">
                      <DragDropContext onDragEnd={this.handleOnDragEnd}>
                        {this.state.kanbanList.map((kanban, index) => (
                          <Droppable droppableId={index.toString()}>
                            {(provided) => (
                              <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                                <Card
                                  bordered={false}
                                  className="kanban-board header-solid mb-24"
                                  title={[
                                    <h6 className="font-semibold m-0">
                                      {kanban.title}
                                    </h6>,
                                  ]}
                                  extra={kanban.extra}
                                  key={index}
                                >
                                  {kanban.children.map((content, idx) => (
                                    <Draggable
                                      key={idx}
                                      draggableId={
                                        idx.toString() + "-" + index.toString()
                                      }
                                      index={idx}
                                    >
                                      {(provided) => {
                                        return (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                          >
                                            {this.renderKanbanType(
                                              content.type,
                                              content,
                                              kanban.title
                                            )}
                                          </div>
                                        );
                                      }}
                                    </Draggable>
                                  ))}
                                  {this.state.isAddingNewTask ===
                                  kanban.title ? (
                                    <>
                                      <TextArea
                                        rows={4}
                                        placeholder="Task Description"
                                        onChange={(e) =>
                                          this.setState({
                                            textDescription: e.target.value,
                                          })
                                        }
                                        value={this.state.textDescription}
                                      />
                                      <Row>
                                        <Col className="text-right">
                                          <Button
                                            key="submit"
                                            type="primary"
                                            onClick={() =>
                                              this.addNewTask(index)
                                            }
                                            className="px-30"
                                          >
                                            Add
                                          </Button>
                                          <Button
                                            key="submit"
                                            onClick={this.cancelAddingNewTask}
                                            className="px-30 ml-10"
                                          >
                                            Cancel
                                          </Button>
                                        </Col>
                                      </Row>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                  {provided.placeholder}
                                </Card>
                              </div>
                            )}
                          </Droppable>
                        ))}
                      </DragDropContext>
                      {/* Modal start */}
                      <Modal
                        visible={visible}
                        title="Title"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={false}
                      >
                        <Form layout="vertical">
                          <Form.Item>
                            <Input
                              size="small"
                              defaultValue="Click me to change title"
                              prefix={<EditOutlined />}
                            />
                          </Form.Item>
                          <Form.Item>
                            <Input
                              size="small"
                              placeholder="Task assignee"
                              prefix={<UserOutlined />}
                            />
                          </Form.Item>
                          <Form.Item>
                            <TextArea rows={4} placeholder="Task Description" />
                          </Form.Item>
                        </Form>

                        <Row>
                          <Col span={12} className="text-left">
                            <Button
                              key="back"
                              onClick={this.handleCancel}
                              type="primary"
                              danger
                              className="px-30"
                            >
                              Delete
                            </Button>
                          </Col>
                          <Col className="text-right" span={12}>
                            <Button
                              key="submit"
                              type="primary"
                              onClick={this.handleOk}
                              className="px-30"
                            >
                              Submit
                            </Button>
                            <Button
                              key="submit"
                              onClick={this.handleCancel}
                              className="px-30 ml-10"
                            >
                              Cancel
                            </Button>
                          </Col>
                        </Row>
                      </Modal>
                      {/* modal end */}
                      {/* Add New Kanban start*/}
                      <Modal
                        visible={isAddingKanban}
                        title="Title"
                        onOk={this.handleAddKanban}
                        onCancel={this.handleCancelAddKanban}
                        footer={false}
                      >
                        <Form layout="vertical">
                          <Form.Item>
                            <Input
                              size="small"
                              placeholder="Board title"
                              prefix={<EditOutlined />}
                              onChange={(e) =>
                                this.setState({
                                  newKanbanTitle: e.target.value,
                                })
                              }
                              value={this.state.newKanbanTitle}
                            />
                            {this.state.newKanbanTitleError ? (
                              <div className="text-danger">
                                Please enter a title
                              </div>
                            ) : (
                              ""
                            )}
                          </Form.Item>
                        </Form>
                        <Row>
                          <Col className="text-right" span={12}>
                            <Button
                              key="submit1"
                              type="primary"
                              onClick={this.handleNewKanban}
                              className="px-30"
                            >
                              Add
                            </Button>
                            <Button
                              key="submit"
                              onClick={this.handleCancelAddKanban}
                              className="px-30 ml-10"
                            >
                              Cancel
                            </Button>
                          </Col>
                        </Row>
                      </Modal>
                      {/* Add New Kanban end*/}
                    </div>
                  </div>
                </Card>
              </div>

              <section className="highlight-section">
                <CopyClipboard
                  text={code}
                  state={this.state.alert}
                  setState={(e) => this.setState({ alert: e })}
                />
                {/* <CopyToClipboard
                  text={code}
                 
                  onClick={() => {
                    
                    this.setState({ copied: true });
        
                    setTimeout(() => {
                      this.setState(false);
                    }, 2000);
                  }}
                >
                  <Button type="primary">Copy to clipboard with span</Button>
                </CopyToClipboard> */}
                <ReactMarkdown
                  children={markdown}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                          className="codetext"
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </section>
            </div>

            <div className="page-anchor">
              <Anchor affix={true} offsetTop={85}>
                <Link href="#Basic" title="Basic" />
              </Anchor>
            </div>
          </div>
        </div>
      </>
    );
  }
}
